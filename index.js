function Timeout(fn, interval) {
    var id = setTimeout(fn, interval);
    this.cleared = false;
    this.clear = function () {
        this.cleared = true;
        clearTimeout(id);
    };
}

function Interval(fn, interval) {
    var id = setInterval(fn, interval);
    this.cleared = false;
    this.clear = function () {
        this.cleared = true;
        clearInterval(id);
    };
}

var t = new Timeout(function () {
    alert('this is a test');
}, 5000);
console.log(t.cleared); // false
t.clear();
console.log(t.cleared); // true

var i = new Interval(function () {
    alert('this is a test');
}, 5000);
console.log(i.cleared); // false
i.clear();
console.log(i.cleared); // true
