const test = require('tap').test
const { KEYS, Timeout, Interval, Clear } = require('../dist/index')

test('Timeout Test', function (t) {
  const time = new Timeout(() => { console.log('Test Timeout') }, 2000)
  t.is(typeof time, 'object')
  console.log('time.getType(): ', time.getType())
  console.log('KEYS.Timeout: ', KEYS.Timeout)
  t.equal(time.getType(), KEYS.TIMEOUT)
  t.ok(time.isActive() === true)
  time.clear()
  t.ok(time.isActive() === false)
  t.end()
})

test('Interval Test', function (t) {
  const inter = new Interval(function () { console.log('Test Interval') }, 2000)
  t.is(typeof inter, 'object')
  t.equal(inter.getType(), KEYS.INTERVAL)
  t.ok(inter.isActive() === true)
  inter.clear()
  t.ok(inter.isActive() === false)
  t.end()
})

test('Clear Test', function (t) {
  const time = new Timeout(function () { console.log('Test Clear') }, 20000)
  t.is(typeof time, 'object')
  t.ok(time.isActive() === true)
  Clear(time)
  t.ok(time.isActive() === false)
  t.end()
})

test('Clear Should fail silently', function (t) {
  const time = { abc: 1 }
  t.is(typeof time, 'object')
  Clear(time)
  t.ok(time.isActive === undefined)
  t.end()
})
