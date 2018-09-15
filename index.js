var recipes = { key: 'value' };

function updateObjectWithKeyAndValue(object, key, value){
  Object.assign({[key]: value}, object);
  return Object
}

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, {[key]: value}, object);
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign({[key]: value}, object);
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, Object);
  delete newObj.key;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
