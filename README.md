# JavaScript Objects Lab

## Objectives

1. Create an object
2. Add key-value pairs to an object
3. Replace values in an object
4. Delete key-value pairs in an object

## Instructions

Be sure to run the tests to get a feel for the types of problems this lab is
asking you to solve. In particular, you'll need to define a `recipes` object and
then apply certain updates (destructively and non-destructively) in various
functions.

![recipes](https://67.media.tumblr.com/6587a382f1b0e5a7d495d8bd4fc55fcd/tumblr_njax7zRQFH1sakzt7o1_500.gif)

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
