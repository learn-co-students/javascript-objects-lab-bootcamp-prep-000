var recipes = {
  prop:1,
  prop2: 2
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, recipes, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, recipes)
  delete newObj[key];
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object
}
