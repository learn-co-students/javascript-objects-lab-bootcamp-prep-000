var recipes = { foo: 'bar' };
function updateObjectWithKeyAndValue(object,key, value) {
  object[key]=value
  return object;
}

function  updateObjectWithKeyAndValue(object,key, value) {
  return Object.assign({},object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object;
}

function  deleteFromObjectByKey(object, key) {
  var object_new = Object.assign({},object)
  delete object_new[key]
  return object_new;
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object;
}