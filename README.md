# JavaScript Objects Lab

## Overview

In this lab, we'll create objects and perform various operations on them. 

## Instructions

Be sure to run the tests to get a feel for the types of problems this lab is
asking you to solve. In particular, you'll need to define a `recipes` object and
then apply certain updates (destructively and non-destructively) in various
functions.

![recipes](http://i.giphy.com/l0HFjaGmrbHanFXNe.gif)

Good luck!

**HINT**: You might find `deleteFromObjectByKey` to be a bit hard to write non-destructively. Think about how we learned to use `Object.assign`. What happens if we do

``` javascript
var obj = { fot: 'bar' }

var newObj = Object.assign({}, obj)

newObj // { fot: 'bar' }

delete newObj.fot // true

newObj // {}

obj // { fot: 'bar' }
```



## Resources

- [MDN: Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
