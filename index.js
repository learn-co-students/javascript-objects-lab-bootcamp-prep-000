//describe('Objects', function())
var recipes = {}

//describe('updateObjectWithKeyAndValue(object, key, value)', function()
function updateObjectWithKeyAndValue(object, key, value) {
<<<<<<< HEAD
  return Object.assign({}, object, {[key]: value})
}

=======
  return Object.assign({}, obj, {[key]: value})
}
var obj = {prop: '1'}
updateObjectWithKeyAndValue(obj, 'prop2', '2')
>>>>>>> 03d7835d977d39c97c123fcf4ad92971f615ac2f


//describe('destructivelyUpdateObjectWithKeyAndValue(object, key, value)', function()
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
object[key] = value
return object
}
<<<<<<< HEAD

=======
var obj = {prop: '1'}
destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', '2')
>>>>>>> 03d7835d977d39c97c123fcf4ad92971f615ac2f



//describe('deleteFromObjectByKey(object, key)', function(); non-destructive
function deleteFromObjectByKey(object, key) {
<<<<<<< HEAD
var newObj = Object.assign({}, object)
delete newObj[key]
return newObj
=======
var obj = {prop: '1'}
var newObj = Object.assign({}, obj)
delete newObj.obj
>>>>>>> 03d7835d977d39c97c123fcf4ad92971f615ac2f
}



//destructivelyDeleteFromObjectByKey(object, key)
<<<<<<< HEAD
function destructivelyDeleteFromObjectByKey(object, key) {
 delete object[key]
 return object
}
=======
>>>>>>> 03d7835d977d39c97c123fcf4ad92971f615ac2f

