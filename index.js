var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  var recipes2 = object;
  Object.assign(recipes2, {[key]: value});
  return recipes2;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var object2 = Object.assign({}, object);
  delete object2[key];
  return object2;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
