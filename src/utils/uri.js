/**
 * This will be the messiest file.
 *
 * But, this is for making sure we can use this in a strange dev env and live. So, using
 * env variable, we can try and build a template URI for dev usage, since we could be behind
 * a proxy, or using separate ports.
 * */

const env = process.env.NODE_ENV || 'development'

const getENV = (key) => process.env[`REACT_APP_${key}`]

// /\${{(scheme|base|port|routing)}}/gi
// new RegExp("/\\${{(scheme|base|port|routing)}}/gi")
const createTemplatingContext = (ctx) => Object.keys(ctx).reduce((previousValue, currentValue) => ({ ...previousValue, [`\${{${currentValue}}}`]: ctx[currentValue] }), {})
const replaceRegex = (ctx) => new RegExp(`\\\${{(${Object.keys(ctx).join('|')})}}`, 'gi')

// This is the base for all the API calls, the path per service is added by the developer
// so examples would be as such, with the templates added when creating the URI
// '${{scheme}}://${base}/${{version}}' => https://api.advtr.co.uk/v1
// '${{scheme}}://${base}/-/api' => http://192.0.0.101/-/api
// eslint-disable-next-line
const API_TEMPLATE = getENV('API_TEMPLATE') || '${{scheme}}://${{host}}/${{path}}'

const API_HOST = getENV('API_HOST') || 'localhost'

const baseContext = {
  scheme: env === 'production' ? 'https' : 'http',
  host: API_HOST
}

function createURI (ctx) {
  const _ctx = createTemplatingContext({ ...baseContext, ...ctx })
  const regex = replaceRegex({ ...baseContext, ...ctx })
  return API_TEMPLATE.replace(regex, (matched) => _ctx[matched])
}

export default createURI
