var recipes = {}

function updateObjectWithKeyAndValue(obj, key, val){
  return Object.assign({}, obj, {[key]:val})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val){
  obj[key]=val
  return obj
}

function deleteFromObjectByKey(obj, key){
  var newObject = Object.assign(recipes, obj)
  delete newObject[key]
  return newObject
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key]
  return obj
}
