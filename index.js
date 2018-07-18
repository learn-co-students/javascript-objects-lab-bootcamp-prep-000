var recipes = {}
function updateObjectWithKeyAndValue(object, key, value){
  var dd = Object.assign({} , object)
  dd[key]= value
  return dd;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key){
 var mm =  delete object.key;
  return mm;
}
function destructivelyDeleteFromObjectByKey(object, key){
  return delete object[key];
}