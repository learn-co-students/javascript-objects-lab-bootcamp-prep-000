var recipes = {};

var obj = { prop: 1 };

function updateObjectWithKeyAndValue(obj, key, value){
   return Object.assign({}, obj, { [key]: value })
}
updateObjectWithKeyAndValue(obj, 'prop2', 2);

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}
destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2);

function deleteFromObjectByKey(obj, key){
  var newObj = Object.assign ({}, obj);
  newObj[key] = undefined;
  return newObj;
}
deleteFromObjectByKey(obj, 'prop')

function destructivelyDeleteFromObjectByKey(obj, key){
  obj[key] = undefined;
  return obj;
}
destructivelyDeleteFromObjectByKey(obj, 'prop')
