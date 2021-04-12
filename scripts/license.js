const fs = require('fs')
const path = require('path')

const chalk = require('chalk')
const nodeGlob = require('glob')

const animateProgress = require('./helpers/progress')
const addCheckmark = require('./helpers/checkmark')

const TREE_SAFE_LOCATION = 'src/assets/acknowledgments.json'
const FILES_TO_PARSE = 'node_modules/**/package.json'

const newLine = () => process.stdout.write('\n')

// Progress Logger
let progress
const task = message => {
  progress = animateProgress(message)
  process.stdout.write(message)

  return error => {
    if (error) {
      process.stderr.write(error)
    }
    clearTimeout(progress)
    return addCheckmark(() => newLine())
  }
}

// Wrap async functions below into a promise
const glob = pattern =>
  new Promise((resolve, reject) => {
    nodeGlob(
      pattern,
      (error, value) => (error ? reject(error) : resolve(value))
    )
  })

const readFile = fileName =>
  new Promise((resolve, reject) => {
    fs.readFile(
      fileName,
      'utf8',
      (error, value) => (error ? reject(error) : resolve(value))
    )
  })

const writeFile = (buffer, fileName) =>
  new Promise((resolve, reject) => {
    fs.writeFile(
      fileName,
      buffer,
      error => (error ? reject(error) : resolve())
    )
  })

/**
 * A way to do includes inside another array
 *
 * @param {string[]} arr
 * @param {string} key
 * */
const includes = (arr, key) => arr.some((route) => route === key)

const readPackage = readFile(path.join(process.cwd(), './package.json'))
const packageDone = task('Reading package.json')

function PackageData(path, pkg) {
  this.package = pkg
  this.path = path
  this.$_data = void 0
}

PackageData.prototype.readData = function () {
  const self = this;
  return readFile(this.path).then((buffer) => JSON.parse(buffer)).then((json) => {
    self.$_data = json
  }).then(() => self)
}

const reading = (pkgs) => Promise.allSettled(pkgs.map((el) => el.readData()))

readPackage.then((buffer) => JSON.parse(buffer)).then((pkg) => {
  packageDone()

  const memoryTask = glob(FILES_TO_PARSE)
  const memoryTaskDone = task('Storing packages in memory')

  memoryTask.then((files) => {
    memoryTaskDone()

    const pkgs = files
      .map(el => ({ name: el.split('/').filter((el) => !['node_modules', 'package.json'].includes(el)).join('/'), file: el }))
      .filter(({ name }) => includes(Object.keys(pkg.dependencies), name))
      .map(({ file, name: pkg }) => new PackageData(file, pkg))


    const readingTaskDone = task('Reading package.json files')

    reading(pkgs).then(promises => {
      const failed = promises.filter(promise => promise.status !== 'fulfilled')
      failed.forEach((pkg) => {
        newLine()
        process.stderr.write(chalk.red('Failed to read\n'))
        process.stderr.write(chalk.red(`\t${pkg.value.package} @ ${pkg.value.path}`))
      })

      return promises.map((el) => el.value)
    }).then((packages) => {
      readingTaskDone()

      const tree = {
        project: pkg.name,
        version: pkg.version,
        dependencies: {}
      }

      const readingTreeTaskDone = task('Parsing the dependency tree for meta data')
      packages.forEach(({ package, $_data }) => {
        const { name, version, description, license, author, repository, } = $_data
        tree.dependencies[package] = {
          name, version, description, license, author, repository
        }
      })

      readingTreeTaskDone()

      const writingMetaTask = writeFile(JSON.stringify(tree, '', 0), path.join(process.cwd(), TREE_SAFE_LOCATION))
      const writingMetaTaskDone = task('Saving meta data in src')

      writingMetaTask.then(() => {
        writingMetaTaskDone()
        process.exit(1)
      })
    })
  })
})

