/**
 * Get the users location via geolocation
 * */
export default async function where () {
  const url = new URL(`https://api.${window.advtr.uri}/geolocation/where`)
  const request = new Request(url.href)
  return (await fetch(request)).json()
}
