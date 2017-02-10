var recipes = {
    "white sauce" : "hollandaise",
    "pasta" : "penne",
    "vegetable" : "roasted asparagus"};//future dinner plans

function updateObjectWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, { [key] : value });
  }//non destructively update object

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
   object[key] = value;
   return object;
}//changes object to include key and value, use square brackets dt string

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
}//create new object, use basic delete operator, return newObject

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;  
}//removes key from object destructively
