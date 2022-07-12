/**
 * This is the object that creates the base URI for all the hooks
 * */

const env = process.env.NODE_ENV || 'development'

const getENV = (key) => process.env[`REACT_APP_${key}`]

// /\${{(scheme|base|port|routing)}}/gi
// new RegExp("/\\${{(scheme|base|port|routing)}}/gi")
const createTemplatingContext = (ctx) => Object.keys(ctx).reduce((previousValue, currentValue) => ({ ...previousValue, [`\${{${currentValue}}}`]: ctx[currentValue] }), {})
const replaceRegex = (ctx) => new RegExp(`\\\${{(${Object.keys(ctx).join('|')})}}`, 'gi')

// eslint-disable-next-line
const DEFAULT_PRODUCTION_API_TEMPLATE = "${{scheme}}://api.${{host}}/${{service}}"

// eslint-disable-next-line
const DEFAULT_DEVELOPMENT_API_TEMPLATE = "${{scheme}}://${{host}}/-/api/${{service}}"

// The standard API template
const API_TEMPLATE = getENV('API_TEMPLATE')
  // eslint-disable-next-line
  ? getENV('API_TEMPLATE') : env === 'production'
    // eslint-disable-next-line
    ? DEFAULT_PRODUCTION_API_TEMPLATE
    : DEFAULT_DEVELOPMENT_API_TEMPLATE

// Use the API HOST
const API_HOST = getENV('API_HOST') || 'localhost'

// Set the scheme
const SCHEME = getENV('API_SCHEME')
  // eslint-disable-next-line
  ? getENV('API_SCHEME') : env === 'production'
    // eslint-disable-next-line
    ? 'https' : 'http'

// Use the CDN
const CDN_HOST = getENV('CDN_HOST') || 'https://cdn.advtr.co.uk'

/**
 * Replace a template string
 *
 * @param {string} string - the template
 * @param {RegExp} withRegex - The regex to check
 * @param {Function} replacer - The replacer function
 * */
function replace (string, withRegex, replacer) {
  return string.replace(withRegex, replacer)
}

class Advtr {
  get _context () {
    return { scheme: SCHEME, host: API_HOST, template: API_TEMPLATE }
  }

  get host () {
    return API_HOST
  }

  where () {
    // where has a unique production API since proxies can get in the way
    const template = getENV('WHERE_TEMPLATE')
      // eslint-disable-next-line
      ? getENV('WHERE_TEMPLATE') : env === 'production'
        // eslint-disable-next-line
        ? '${{scheme}}://${{service}}.${{host}}'
        : DEFAULT_DEVELOPMENT_API_TEMPLATE

    const ctx = { ...this._context, service: 'where' }
    const tpl = createTemplatingContext(ctx)
    const regex = replaceRegex(ctx)

    // Replace the template with the contexts
    return replace(template, regex, (m) => tpl[m])
  }

  cdn () {
    return CDN_HOST
  }

  service (service, options = {}) {
    const serviceName = getENV(service.toUpperCase()) || service
    const ctx = { ...this._context, ...options, service: serviceName }
    const tpl = createTemplatingContext(ctx)
    const regex = replaceRegex(ctx)

    // Replace the template with the contexts
    return replace(API_TEMPLATE, regex, (m) => tpl[m])
  }
}

export default () => new Advtr()
