/* eslint-disable no-template-curly-in-string */

const getReactEnv = (key) => process.env[`REACT_APP_${key}`]

const replaceRegex = (ctx) => new RegExp(`\\\${{(${Object.keys(ctx).join('|')})}}`, 'gi')
const createTemplating = (ctx) => Object.keys(ctx).reduce((previousValue, currentValue) => ({ ...previousValue, [`\${{${currentValue}}}`]: ctx[currentValue] }), { })

const host = getReactEnv('URI_HOST') ||
  (/staging/gi.test(process.env.NODE_ENV) || /production/gi.test(process.env.NODE_ENV) ? 'advtr.co.uk' : 'localhost')

const scheme = getReactEnv('URI_SCHEME') ||
  (/staging/gi.test(process.env.NODE_ENV) || /production/gi.test(process.env.NODE_ENV) ? 'https' : 'http')

const stagingID = getReactEnv('STAGING_ID')

/**
 * @param {string} uriTmpl https://{id}.staging.advtr.co.uk/{service}/{version?:latest}/path?query=
 * @param {string} cdnTmpl https://cdn.staging.advtr.co.uk/path
 * */
const STAGING = ((uriTmpl, cdnTmpl) => ({
  name: 'STAGING',
  /**
   * @param {string} service
   * @param {string} version
   * */
  service (service, version = 'latest') {
    if (!stagingID) throw new Error(`'NODE_ENV=${process.env.NODE_ENV}' must be set with 'STAGING_ID'`)

    const ctx = { host, scheme, service, version, id: stagingID }
    const tmpl = createTemplating(ctx)
    return uriTmpl.replace(replaceRegex(ctx), (substring) => tmpl[substring])
  },
  cdn () {
    return cdnTmpl
  }
}))(getReactEnv('STAGING_URI') || '${{scheme}}://${{id}}.staging.${{host}}/${{service}}/${{version}}', getReactEnv('STAGING_CDN') || 'https://cdn.staging.advtr.co.uk')

/**
 * @param {string} uriTmpl https://api.advtr.co.uk/{service}/path?query=
 * @param {string} cdnTmpl https://cdn.advtr.co.uk/path
 * */
const PRODUCTION = ((uriTmpl, cdnTmpl) => ({
  name: 'PRODUCTION',
  /**
   * @param {string} service
   * */
  service (service) {
    const ctx = { host, scheme, service }
    const tmpl = createTemplating(ctx)
    return uriTmpl.replace(replaceRegex(ctx), (substring) => tmpl[substring])
  },
  cdn () {
    return cdnTmpl
  }
}))(getReactEnv('API_URI') || '${{scheme}}://api.${{host}}/${{service}}', getReactEnv('CDN_URI') || 'https://cdn.advtr.co.uk')

/**
 * @param {string} uriTmpl http://localhost/~/{service}/{version?:latest}/path?query=
 * @param {string} cdnTmpl https://cdn.advtr.co.uk/path
 * */
const DEVELOPMENT = ((uriTmpl, cdnTmpl) => ({
  name: 'DEVELOPMENT',
  /**
   * @param {string} service
   * @param {string} version
   * */
  service (service, version = 'latest') {
    const ctx = { host, scheme, service, version }
    const tmpl = createTemplating(ctx)
    return uriTmpl.replace(replaceRegex(ctx), (substring) => tmpl[substring])
  },
  cdn () {
    return cdnTmpl
  }
}))(getReactEnv('DEVELOPMENT_URI') || '${{scheme}}://localhost/~/${{service}}/${{version}}', getReactEnv('CDN_URI') || 'https://cdn.advtr.co.uk')

export { STAGING, PRODUCTION, DEVELOPMENT }
