<?
// Wait miliseconsd and exec iteratively
// @t: time in miliseconds
// @cb: callback
/*
Returns an object with
    - "stop" method: Clear interval.
    - "id" property: Interval id.
    - "i" property: Number of times executed.
*/
function timer(t, cb) {
    var o = {};
    o.i = 0;
    o.id = setInterval(
    function(){
        o.i++;
        cb(o);
    },t);
    o.stop = function() {
    clearInterval(o.id);
    }; return o;
};
?>
