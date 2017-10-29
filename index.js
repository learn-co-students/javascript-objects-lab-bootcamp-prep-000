var recipes = {

}
function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
  }
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}
function deleteFromObjectByKey(obj, key) {
  var nObj = Object.assign({}, obj);
  delete nObj[key];
  return nObj;
}
function destructivelyDeleteFromObjectByKey(obj, key) {
  obj[key] = undefined;
  return obj;
}
