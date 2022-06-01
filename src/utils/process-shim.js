if (typeof process !== 'object') {
  // Add the shims when needed
  global.process = window.process = {
    emit: (...args) => { }
  }
}
