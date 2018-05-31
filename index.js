var recipes = {}

function updateObjectWithKeyAndValue(a, b, c) {return Object.assign({}, a, {[b]: c})
}

function destructivelyUpdateObjectWithKeyAndValue(a, b, c) {
  a[b] = c; return a
  }
  
function destructivelyDeleteFromObjectByKey(a, b) {
  delete a[b]; return a
}

function deleteFromObjectByKey(a, b) {
  var NEWOBJECT = Object.assign({}, a);
  delete NEWOBJECT[b];
  return NEWOBJECT
  }
