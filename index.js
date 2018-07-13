let recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  let newObj = Object.assign({},object, {[key]: value});
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key]: value});
}

function deleteFromObjectByKey(object, key){
  let newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}