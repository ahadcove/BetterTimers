const test = require('tap').test
const Timeout = require('../index')
const Interval = require('../index')

test('Timeout Test', function (t) {
  const time = new Timeout(function () { console.log('Test Timeout') }, 2000)
  t.is(typeof time, 'object')
  t.ok(time.cleared === false)
  time.clear()
  t.ok(time.cleared === true)
  t.end()
})

test('Interval Test', function (t) {
  const inter = new Interval(function () { console.log('Test Interval') }, 2000)
  t.is(typeof inter, 'object')
  t.ok(inter.cleared === false)
  inter.clear()
  t.ok(inter.cleared === true)
  t.end()
})
