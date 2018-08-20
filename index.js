var recipes = new Object({ });

function updateObjectWithKeyAndValue(object, key, value){
  var obj = Object.assign({}, object, { [key]: value });
  return obj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(obj, key){
  var newObj = Object.assign ({}, obj, key);
  return (delete newObj.key);
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key]; 
  return obj;
}