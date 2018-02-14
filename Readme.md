# Better Timers
Better timeout is a "Better" way to handle timeouts
It wil keep track of if the timeout is active or not.


## Why
There are multiple instances where I had to keep track of a timeout and now I can much easier


## Features
The Clear function handles the timing event in a much cleaner way. It will first check to make sure the object is indeed a timing event, and only then will it determine which way it need to clear the event. This prevent bugs from occurring and not having to worry about passing in an undefined var. Just worry about passing it in, and BetterTiming will take care of the rest.
 

## Usage

#### Timeout
--------------
```js
var t = new Timeout(function () {
    console.log('this is a test');
}, 5000);
console.log(t.cleared); // false
t.clear();
console.log(t.cleared); // true
```

#### Interval
--------------
```js
var i = new Interval(function () {
    console.log('this is a test');
}, 5000);
console.log(i.cleared); // false
t.clear();
console.log(i.cleared); // true
```

#### Clearing a Timing Event
--------------
```js
var i = new Interval(function () {
    console.log('this is a test');
}, 5000);
var t = new Timeout(function () {
    console.log('this is a test');
}, 5000);
console.log(i.cleared); // false
console.log(t.cleared); // false
Clear(t);
Clear(i);
console.log(i.cleared); // true
console.log(t.cleared); // true
```

## License

Apache 2.0