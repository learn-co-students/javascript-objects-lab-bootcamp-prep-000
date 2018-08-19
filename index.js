var recipes = {};


function updateObjectWithKeyAndValue(object, key, value){
  const object2 = Object.assign({prop: 1, prop2: 2}, recipes);
  return object2;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key){
  var clone = Object.assign({},object);
  delete clone[key];
  return clone;
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}