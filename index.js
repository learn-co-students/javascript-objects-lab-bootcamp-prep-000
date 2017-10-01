let recipes = {};

function updateObjectWithKeyAndValue(obj, key, value){
  let x = Object.assign({}, obj);
  x[key] = value;
  return x;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(obj, key){
  let x = Object.assign({}, obj)
  delete x[key];
  return x;
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key];
  return obj;
}
