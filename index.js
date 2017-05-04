var recipes = {
  breakfast: "salt"
}

function updateObjectWithKeyAndValue(obj, key, value) {
   return Object.assign( {}, obj, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var x = Object.assign({}, object);
  delete x[key];
  return x;
}

function destructivelyDeleteFromObjectByKey(object, key) {
   delete object[key];
   return object;
}
