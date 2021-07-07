var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, object, {[key]: value});
  
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  
  return Object.assign(object, {[key]: value})
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  return delete object[key]
}