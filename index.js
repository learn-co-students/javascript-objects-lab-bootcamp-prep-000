var recipes = new Object({
  recipes : 'object'
})

function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {'prop2': 2})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value ){
  obj.prop2 = 2
  return obj
}

function deleteFromObjectByKey(obj, key){
  var newObj = Object.assign({}, obj)
  delete newObj.prop
  return newObj
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj.prop
  return obj
}
