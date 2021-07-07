var recipes = {
  prop: 1
}

function updateObjectWithKeyAndValue (object,key, value){
  return Object.assign({prop:1}, {prop2:2})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object.prop2 = 2;
   return object
}
function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, recipes)
  delete newObj.prop
  return newObj
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.prop
  return object
}