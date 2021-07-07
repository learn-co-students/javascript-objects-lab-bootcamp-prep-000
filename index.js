var recipes = {}
function updateObjectWithKeyAndValue(obj, key, val) {
  var obj1 = Object.assign({}, obj, {[key]: val});
  return obj1
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj
}
function deleteFromObjectByKey(obj, key) {
  var obj1 = Object.assign({}, obj);
  return delete obj1.key;
  
}
function destructivelyDeleteFromObjectByKey(obj, key) {
   delete obj[key];
   return obj;
  
}
