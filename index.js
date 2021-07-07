var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  const recipes2 = Object.assign({}, object, {[key]: value})
  return recipes2
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]= value;
  return object
}

function deleteFromObjectByKey(object, key){
  var object = { foo: 'bar' }
  delete object[key];
  return object
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object
}
