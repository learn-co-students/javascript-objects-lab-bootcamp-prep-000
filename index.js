var recipes = {};

var updateObjectWithKeyAndValue = function(obj, key, value){
  var obj2 = Object.assign({}, obj, {[key]:value});
  return obj2;
}

var destructivelyUpdateObjectWithKeyAndValue = function(obj, key, value){
  obj = Object.assign({}, obj, {[key]: value});
  return obj;
}

var deleteFromObjectByKey = function(obj, key){
  var obj2 = Object.assign({}, obj);
  delete obj2[key];
  return obj2;
}
var destructivelyDeleteFromObjectByKey = function (obj, key){
  delete obj[key];
  return obj
}
