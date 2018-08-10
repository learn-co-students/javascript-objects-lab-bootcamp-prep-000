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
  var obj2  = {foo:'bar'}
  delete obj2.foo
  return obj2
}