import logger from '@harrytwright/logger'

export default function ({ name, delta, id }) {
  logger.http('web-vitals', { name, delta, id }, '[%s] %s - %s', id, name, Math.round(name === 'CLS' ? delta * 1000 : delta))
}
