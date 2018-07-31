var recipes = {};

function updateObjectWithKeyAndValue (obj, key, value){
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue (obj, key, value){
  obj[key] = value
  return obj
}

function deleteFromObjectByKey (obj, key, value){
  var obj1 = {foo: 'bar'}
  var newObj = Object.assign ({}, obj1)
  delete newObj.foo
  return newObj
}

function destructivelyDeleteFromObjectByKey(obj, key, value){
  var obj1 = {key: 'value'}
  var newObj = Object.assign ({}, obj1)
  delete obj1.prop
  return obj1
}