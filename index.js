

var recipes = new Object();

//non-destructively clone with new data
function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign({}, object, { [key]: value})
 }

//updates `object` with the given `key` and `value`
// (it is destructive) and returns the entire updated object:
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
   object[key] = value
   return object
 }

//deleting
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
