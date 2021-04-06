/**
 * Slightly safer fetch, with a little error handling
 *
 * @param {RequestInfo} request
 * @param {RequestInit} [init]
 * */
export default async function JSONFetch (request, init = undefined) {
  const response = await fetch(request, init)

  if (!response.ok && !response.body) {
    throw new Error(response.statusText)
  }

  const body = await response.json()

  if (!body) {
    throw new Error(response.statusText)
  }

  if (!response.ok || response.status === 204) {
    throw new Error(body?.error?.message || response.statusText)
  }

  return body
}
