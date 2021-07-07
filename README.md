# JavaScript Objects Lab

## Overview

In this lab, we'll create objects and perform various operations on them. 

function init() {
 
// Keep track of index outside of the event handler.
let index = 0;
document.body.addEventListener('keydown', function(e))

// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  const key = e.key;
 
  if (key === codes[index]) {
    index++;
 
    if (index === codes.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}
}

## Instructions

Be sure to run the tests to get a feel for the types of problems this lab is
asking you to solve. In particular, you'll need to define a `recipes` object and
then apply certain updates (destructively and non-destructively) in various
functions.

![recipes](http://i.giphy.com/l0HFjaGmrbHanFXNe.gif)

Good luck!

**HINT**: You might find `deleteFromObjectByKey` to be a bit hard to write non-destructively. Think about how we learned to use `Object.assign`. What happens if we do

``` javascript
var obj = { foo: 'bar' }

var newObj = Object.assign({}, obj)

newObj // { foo: 'bar' }

delete newObj.foo // true

newObj // {}

obj // { foo: 'bar' }
```

Hmmmmm...

## Resources

- [MDN: Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
