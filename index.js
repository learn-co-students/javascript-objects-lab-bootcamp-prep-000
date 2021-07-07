var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {['prop2']: 2});
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object['prop2'] = 2;
  return object;
}
function deleteFromObjectByKey(object, key) {
  const Newobj = Object.assign({}, object);
  delete Newobj[key];
  return Newobj;
}
function destructivelyDeleteFromObjectByKey(object, key) {
delete object[key];
return object;
}
