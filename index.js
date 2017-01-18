var recipes = new Object(); //Object Constructor
function updateObjectWithKeyAndValue(obj, key, value){//non-destructive
  return Object.assign({}, obj, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  //use bracket notation when value is a variable of unknown type
  obj[key] = value;
  return obj;
}
function deleteFromObjectByKey(object, key){//non-destructive
  var newObj = Object.assign({}, object);
  delete newObj.key;
  return newObj;
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  return object;
}
