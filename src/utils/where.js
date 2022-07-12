import JSONFetch from './advtr-fetch'

const getENV = (key) => process.env[`REACT_APP_${key}`]

const DEFAULT_IP = getENV('DEFAULT_IP')

/**
 * Get the users location via geolocation
 * */
export default async function where () {
  const url = new URL(`${window.advtr.api.where()}/ip`)
  DEFAULT_IP && url.searchParams.set('ip', DEFAULT_IP)
  const request = new Request(url.href)
  return JSONFetch(request)
}
