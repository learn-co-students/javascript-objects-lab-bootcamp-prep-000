var recipes = new Object();

function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(obj, key){
  delete obj.key;
}

function deleteFromObjectByKey(obj, key){
  return Object.assign({}, key);
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key];
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key];
  return obj;
}