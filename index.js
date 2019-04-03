//describe('Objects', function())
var recipes = {}

//describe('updateObjectWithKeyAndValue(object, key, value)', function()
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}



//describe('destructivelyUpdateObjectWithKeyAndValue(object, key, value)', function()
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
object[key] = value
return object
}




//describe('deleteFromObjectByKey(object, key)', function(); non-destructive
function deleteFromObjectByKey(object, key) {
var newObj = Object.assign({}, object)
delete newObj[key]
return newObj
}



//destructivelyDeleteFromObjectByKey(object, key)
function destructivelyDeleteFromObjectByKey(object, key) {
 delete object[key]
 return object
}

