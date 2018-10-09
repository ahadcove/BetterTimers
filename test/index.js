const test = require('tap').test
const Timeout = require('../dist/index').Timeout
const Interval = require('../dist/index').Interval
const Immediate = require('../dist/index').Immediate
const Clear = require('../dist/index').Clear

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

test('Immediate Test', function (t) {
  const imme = new Immediate(function () { console.log('Test Immediate') })
  t.is(typeof imme, 'object')
  t.ok(imme.cleared === false)
  imme.clear()
  t.ok(imme.cleared === true)
  t.end()
})

test('Clear Test', function (t) {
  const time = new Timeout(function () { console.log('Test Clear') }, 20000)
  t.is(typeof time, 'object')
  Clear(time)
  t.ok(time.cleared === true)
  t.end()
})

test('Clear Should fail', function (t) {
  const time = { abc: 1 }
  t.is(typeof time, 'object')
  Clear(time)
  t.ok(time.cleared === undefined)
  t.end()
})
