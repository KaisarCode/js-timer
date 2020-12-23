# Timer
[js] Wait miliseconsd and exec iteratively.

### Install
```
npm install kc-timer
```

### Use
```js
var timer = require('kc-timer');
var i = 0;
var t = timer(1000, function(){
    i++;
    console.log(i);
    if (i == 5) {
        t.stop();
    }
});
```
