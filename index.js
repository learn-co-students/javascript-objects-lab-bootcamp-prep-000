var recipes = {

};

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function deleteFromObjectByKey(obj, key) {
  var newObj = Object.assign({}, obj);
  delete newObj[key];
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   object[key] = value;
   return object;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
