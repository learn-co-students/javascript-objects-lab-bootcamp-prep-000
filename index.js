//Define recipes object
var recipes = {}

// Update key and value
function updateObjectWithKeyAndValue(object, key, value) {
return  Object.assign({}, object, {[key]:value});

}
//delete from object destructive
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
}
//destructive update, orginal change
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 object[key] = value
 return object

}
//deleting the clone object
function deleteFromObjectByKey(object, key) {
  var newObj= Object.assign({} ,object)
  delete newObj[key]
 return newObj
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
