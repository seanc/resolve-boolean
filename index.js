function resolve (input) {
  switch (input) {
    case 'yes': return true
    case 'no': return false
    case 1: return true
    case 0: return false
    case typeof input === 'boolean': return input
    default: return null
  }
}

module.exports = resolve
