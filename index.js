module.exports = { Timeout: Timeout, Interval: Interval, Clear: Clear }

const KEYS = { TIMEOUT: 'timeout', INTERVAL: 'interval'}

function Timeout (fn, interval) {
  var id = setTimeout(fn, interval)
  this.type = KEYS.TIMEOUT
  this.cleared = false
  this.clear = function () {
    this.cleared = true
    clearTimeout(id)
  }
}

function Interval (fn, interval) {
  var id = setInterval(fn, interval)
  this.type = KEYS.INTERVAL
  this.cleared = false
  this.clear = function () {
    this.cleared = true
    clearInterval(id)
  }
}

function Clear (timer) {
    if(timer && timer.id){
        timer.clear()
        // if(timer.type === KEYS.TIMEOUT){
        //     timer.clear()
        // } else if(timer.type === KEYS.INTERVAL){
        //     timer.clear()
        // }
    } else {
        return;
    }
}