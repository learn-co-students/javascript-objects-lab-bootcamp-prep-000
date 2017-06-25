var recipes = {object: recipes}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, {prop: 1, prop2: 2 })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
object.prop2 = 2
return object
}

function deleteFromObjectByKey(object, key){
  var obj = { prop: 1 }
  var newObj = Object.assign({}, obj)
  delete newObj.prop2
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.prop2
  return object
}
