var recipes = {
  recipe: 'objects'
}

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, recipes)

  return Object.assign({}, object, {[key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj, key){
  var newObj = Object.assign({}, obj)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key]
  return obj
}
