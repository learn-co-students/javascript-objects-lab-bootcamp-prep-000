var recipes = {
};
function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}
function deleteFromObjectByKey(obj,key) {
  const newObj = Object.assign({}, obj, [key]);
  delete newObj [key];
  return newObj;
}
function destructivelyDeleteFromObjectByKey(obj,key){
  delete obj [key];
  return obj;
}