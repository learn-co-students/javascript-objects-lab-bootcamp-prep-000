var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]:value})

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key]:value})

}
//updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object:

function deleteFromObjectByKey(object, key) {
  var temp = Object.assign({}, object, {})
  delete temp[key]
  return temp

}
//deletes `key` from a clone of object and returns the new object

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
//returns object without the delete key/value pair:
