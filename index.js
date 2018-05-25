var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = Object.assign({ prop: '1', prop2: '2'})
   return obj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object.prop='1';
  object.prop2='2';
  return updateObjectWithKeyAndValue()
}

function deleteFromObjectByKey(object, key) {
  object = { prop: '1' }
  var newObj = Object.assign({}, object)
  delete newObj.prop
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
 object.prop='1' 
 delete object.prop
 return object
}
