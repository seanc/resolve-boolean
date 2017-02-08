const test = require('ava')
const resolveBoolean = require('./')

// Resolve yes and no to true and false
test('yes and no', t => {
  t.plan(2)
  t.is(resolveBoolean('yes'), true)
  t.is(resolveBoolean('no'), false)
})

// Resolve 0 to false, 1 to true
test('0 and 1', t => {
  t.plan(2)
  t.is(resolveBoolean(1), true)
  t.is(resolveBoolean(0), false)
})

// If booleans are pass, simply return them
test('default types', t => {
  t.plan(2)
  t.is(true, true)
  t.is(false, false)
})

// Resolve to null if not, any of the above
test('unknown types', t => {
  t.is(resolveBoolean(42), null)
})
