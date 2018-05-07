var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object, {[key]: value} )
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(obj, key){
  var newObj = Object.assign({}, obj);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(obj, key){
  
  delete obj[key];
  return obj;
}