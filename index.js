module.exports = Timeout; Interval

function Timeout (fn, interval) {
  var id = setTimeout(fn, interval)
  this.cleared = false
  this.clear = function () {
    this.cleared = true
    clearTimeout(id)
  }
}

function Interval (fn, interval) {
  var id = setInterval(fn, interval)
  this.cleared = false
  this.clear = function () {
    this.cleared = true
    clearInterval(id)
  }
}
