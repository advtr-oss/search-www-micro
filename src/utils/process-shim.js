/**
 * This is to shim process class before they are called by a rendered component
 *
 * it's a pain, I need to adjust tidy/core to not work w/ process and use events instead
 * */

global.process = window.process = Object.assign(typeof process === 'object' ? process : { }, {
  emit: (...args) => {
    console.debug(...args)
  },
  env: {
    NODE_ENV: 'development'
  }
})
