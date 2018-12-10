var recipes = {'cake': 'eggs'}

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, object, {[key]: value})
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key){
  let res = Object.assign({}, object);
  delete res[key];
  return res
}
function destructivelyDeleteFromObjectByKey(object, prop){
  delete object[prop];
  return object
}