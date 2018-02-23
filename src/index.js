module.exports = { Timeout: Timeout, Interval: Interval, Immediate: Immediate, Clear: Clear }

const KEYS = { TIMEOUT: 'timeout', INTERVAL: 'interval', IMMEDIATE: 'immediate' }

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

function Immediate (fn) {
  this.timer = setImmediate(fn)
  this.type = KEYS.IMMEDIATE
  this.cleared = false
  this.clear = function () {
    this.cleared = true
    clearImmediate(this.timer)
  }
}

function Clear (timer) {
  if (timer && timer.timer) {
    timer.clear()
    return timer.cleared
  } else {
    return undefined
  }
}
