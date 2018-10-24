# Better Timers
Better timeout is a "Better" way to handle timeouts and intervals
It wil keep track of if the timer is active or not.
It also will not throw an error when trying to clear a timer, so clear as much as you wish ;)


## Why
There are multiple instances where I had to keep track of a time or even wanted to clear multiple times for a sanity check. This causes issues, because if the timer isn't a timer and you try to clear it, it will throw an error. It's also very hard to know if a regular timer is active or not.
With BetterTimers it get's rid of all of these issues!!


## Features
The Clear function handles the timing event in a much cleaner way. It will first check to make sure the object is indeed a timing event, and only then will it attempt to clear the timer. This prevent bugs from occurring and not having to worry about passing in an undefined var. Just worry about passing it in, and BetterTiming will take care of the rest.
 
 
## So Small
This library requires no dependencies meaning those few dozens of lines come up to just 1KB!!
It's also TypeScript compatible!!

## Usage

#### Timeout
--------------
```js
import { Timeout } from 'bettertimers';

var timeO = new Timeout(function () {
    console.log('this is a test');
}, 5000);
console.log(timeO.isActive()); // true
timeO.clear();
console.log(timeO.isActive()); // false
```

#### Interval
--------------
```js
import { Interval } from 'bettertimers';

var inter = new Interval(function () {
    console.log('this is a test');
}, 5000);
console.log(inter.isActive()); // true
inter.clear();
console.log(inter.isActive()); // false
```

#### Clearing a Timing Event using the Clear function
--------------
```js
import { Interval, Timeout, Clear } from 'bettertimers';

var i = new Interval(function () {
    console.log('this is a test');
}, 5000);
var t = new Timeout(function () {
    console.log('this is a test');
}, 5000);
console.log(i.isActive()); // true
console.log(t.isActive()); // true
Clear(t);
Clear(i);
console.log(i.isActive()); // false
console.log(t.isActive()); // false
```

## License

Apache 2.0