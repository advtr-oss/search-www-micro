import { SearchProvider } from '../shared'

let delayTimout = 100
Object.defineProperty(global, 'mock_delay', {
  get: () => delayTimout,
  set: (v) => delayTimout = v
})

async function fakeFetch (provider, query) {
  const results = provider.scoring().filter((el) => el.score(query) >= 1).map((el) => el.id)
  const hits = provider.processedData.filter((el) => results.includes(el._id)).map((hit) => ({
    placeid: hit._id,
    score: hit._score,
    ...hit._source
  }))

  if (hits.length === 0) throw new Error('No Content')

  if (global.mock_delay === 0) {
    return {
      meta: {status: 200},
      results: hits
    }
  }

  console.log(hits)

  return await delay(global.mock_delay, {
    meta: { status: 200 },
    results: hits
  })
}

let mock

export default class MockSearchProvider extends SearchProvider {
  get name () {
    return 'MOCK'
  }

  // This way helps w/ this = undefined
  static default () {
    if (!mock) {
      mock = new MockSearchProvider(require('./data.json'))
    }
    return mock
  }

  constructor (data) {
    super()

    this.processedData = data

    // Create a rough scoring, called as a function so it creates data each time
    this.scoring = memorise(() => {
      return this.processedData.map((el) => ({
        score: createFuzzyScorer(el._source.containers.entity.value),
        id: el._id
      }))
    }, this.processedData)

    this.search = this.search.bind(this)
  }

  // // {"status":200,"results":[{"placeid":"8949505","score":12.021529, ... }
  async search (query, options) {
    try {
      return (await fakeFetch(this, query)).results
    } catch (err) {
      return []
    }
  }
}

function Memorised (count, result, deps) {
  this.count = count
  this.result = result
  this.deps = JSON.stringify(deps)
}

/**
 * Function to be save time on when calling score and update only when their is a change to dependencies
 *
 * Very rough work at a memorisation function
 * */
function memorise (fn, deps) {
  let count = 0
  const dependency = {}

  return (...args) => {
    if (!dependency[fn] || dependency[fn].deps !== JSON.stringify(deps)) {
      dependency[fn] = new Memorised(!dependency[fn]?.count ? count++ : dependency[fn]?.count, fn(...args), deps)
    }
    return dependency[fn].result
  }
}

/**
 * Bellow is taken from https://j11y.io/javascript/fuzzy-scoring-regex-mayhem/
 *
 * This is a little scorer to try and dynamic some results so I'm not forcing
 * the results are almost similar to what I need
 * */
function createFuzzyScorer (text) {
  const matcher = makeFuzzyRegex(text)

  return function (query) {
    const match = matcher.exec(query)

    if (!match) return 0

    const captures = match.slice(1)
    let score = 0

    // The scoring loop:
    for (let i = 0, l = captures.length; i < l; i += 3) {
      const relevancyOfCharacter = Math.pow(i + 1, -2)
      if (captures[i]) score -= relevancyOfCharacter * 0.1
      if (captures[i + 1]) score += relevancyOfCharacter * 1
      if (captures[i + 2]) score -= relevancyOfCharacter * 0.1
    }

    score -= Math.abs(query.length - text.length) * 0.05

    return score
  }

  function makeFuzzyRegex (string) {
    if (!string) { return /^$/ }

    // Escape any potential special characters:
    const cleansed = string.replace(/\W/g, '\\$&')

    return RegExp(
      '^' +
      cleansed.replace(
        // Find every escaped and non-escaped char:
        /(\\?.)/g,
        // Replace with fuzzy character matcher:
        '(?:(^.)?($1)(.??))?'
      ) +
      '$',
      'i'
    )
  }
}

function delay (t, val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(val)
    }, t)
  })
}
