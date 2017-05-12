var recipes = {};
function updateObjectWithKeyAndValue(object, key, value){
var lizard2 = {[key]:value};
var lizard = Object.assign(object, lizard2);
  return lizard
}

function deleteFromObjectByKey(object2, key){
  var lizard = Object.assign({},object2);
  delete lizard[key];
  return lizard
}
function destructivelyDeleteFromObjectByKey(object2, key){
  delete object2[key];
  return object2
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value

  return obj
}
