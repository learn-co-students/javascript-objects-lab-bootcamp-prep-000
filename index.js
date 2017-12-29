var recipes= {};

function updateObjectWithKeyAndValue(object, key, value) {
  var obj2 = Object.assign({}, object, {[key]: [value]});
  return obj2
}

function updateObjectWithKeyAndValue(object, key, value) {
  var obj2 = [];
  Object.assign(obj2, object, {[key]: value})
  return obj2
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
   var obj2 = [];
   
  Object.assign(obj2, delete object.key)
  return obj2
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}