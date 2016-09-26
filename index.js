var recipes = {
  food: "ingrediants"
}

function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj, key){
  var obj = { foo: 'bar' }
  var newObj = Object.assign({}, obj)
  delete newObj.obj
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key){
  var obj ={object: "key"}
  delete obj.object
  return obj
}
