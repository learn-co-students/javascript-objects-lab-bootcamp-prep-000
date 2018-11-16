var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var fin = Object.assign({}, object, {[key]:value});
  return fin;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val) {
   obj[key]=val;
   return obj;
}

function deleteFromObjectByKey(obj, key) {
  var mod = Object.assign({}, obj)
  delete mod[key];
  return mod;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}
