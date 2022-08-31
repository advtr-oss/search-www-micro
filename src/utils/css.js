/**
 * Some little helpers for inline stying
 * */

/**
 * @param {string|number} str
 * */
export const vh = (str) => `${str.toString()}vh`

/**
 * @param {string|number} str
 * */
export const vw = (str) => `${str.toString()}vw`

/**
 * @param {string} str
 * */
export const url = (str) => `url(${str})`

/**
 * @param {string|number} str
 * */
export const pixel = (str) => `${str.toString()}px`

/**
 * @param {string|number} str
 * */
export const percent = (str) => `${str.toString()}%`

/**
 * @param {string} str
 * */
export const calc = (str) => `calc(${str})`

/**
 * @param {string} str
 * */
export const minWidth = (str) => `(min-width: ${str})`

/**
 * @param {string} str
 * */
export const maxWidth = (str) => `(max-width: ${str})`

/**
 * @param {string} str
 * */
export const maxHeight = (str) => `(max-height: ${str})`

/**
 * @param {string} str
 * */
export const minHeight = (str) => `(min-height: ${str})`

/**
 * @param {string} lhs
 * @param {string} rhs
 * */
export const division = (lhs, rhs) => `${lhs} / ${rhs}`

/**
 * @param {string} lhs
 * @param {string} rhs
 * */
export const multiplication = (lhs, rhs) => `${lhs} * ${rhs}`

/**
 * @param {string} lhs
 * @param {string} rhs
 * */
export const minus = (lhs, rhs) => `${lhs} - ${rhs}`

/**
 * @param {string[]} str
 * */
export const min = (str) => `min(${str.join(', ')})`
