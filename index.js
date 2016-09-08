var recipes = {};

var updateObjectWithKeyAndValue = function(obj, key, val) {

  return Object.assign(obj, {[key]: val});
}

var destructivelyUpdateObjectWithKeyAndValue = function(obj, key, val){
   obj[key] = val;
   return obj;
}

var deleteFromObjectByKey = function(obj, key, val) {
  var newObj = Object.assign({}, obj);
  delete newObj[key];
  return newObj;
}

var destructivelyDeleteFromObjectByKey = function(obj, key, val) {
  delete obj[key];
  return obj;
}
