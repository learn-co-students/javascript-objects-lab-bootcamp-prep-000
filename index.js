var recipes = {flour: "1 cup", milk: "1 cup", sugar: "1 tbsp"};
function updateObjectWithKeyAndValue(obj, key, value) {

  var objNew = Object.assign({}, obj)
  objNew[key] = value;
  return objNew
  
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  
  obj[key] = value;
  return obj 
}
function deleteFromObjectByKey(obj, key) {
  
 var objNew = Object.assign({}, obj);
  delete objNew[key];
  return objNew
}
function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj 
}