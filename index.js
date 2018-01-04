var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  var newobj = Object.assign({}, object, {[key]: value});
  return newobj;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object
}
function deleteFromObjectByKey(object, key){
  //_.omit(object[key]);
  var newObject = JSON.parse(JSON.stringify(object));
  
  delete newObject[key];
  return newObject;
}
function destructivelyDeleteFromObjectByKey(object, key){
delete object[key];
return object;
}