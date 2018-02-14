module.exports = { Timeout: Timeout, Interval: Interval, Clear: Clear }

const KEYS = { TIMEOUT: 'timeout', INTERVAL: 'interval' }

function Timeout (fn, interval) {
  this.timer = setTimeout(fn, interval)
  this.type = KEYS.TIMEOUT
  this.cleared = false
  this.clear = function () {
    this.cleared = true
    clearTimeout(this.timer)
  }
}

function Interval (fn, interval) {
  this.timer = setInterval(fn, interval)
  this.type = KEYS.INTERVAL
  this.cleared = false
  this.clear = function () {
    this.cleared = true
    clearInterval(this.timer)
  }
}

function Clear (timer) {
  if (timer && timer.timer) {
    console.log('Is timer')
    timer.clear()
  } else {
    console.log('Is not timer')
  }
}
