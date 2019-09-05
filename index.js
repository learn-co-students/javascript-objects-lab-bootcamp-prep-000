var recipes = {}

function updateObjectWithKeyAndValue(first, key, value){
  return Object.assign({}, first, {prop: 1, prop2: 2 })
}

function destructivelyUpdateObjectWithKeyAndValue(second, key, value) {
  second[key] = value
  return second;
}

function deleteFromObjectByKey(object, key) {
  var clone = object[key]
  return clone
}

function destructivelyDeleteFromObjectByKey(object, key) {
 delete object[key]
 return object
}