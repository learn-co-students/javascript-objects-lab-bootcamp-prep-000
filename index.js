var recipes = {
  eggs : '1',
  chocolate : '3',
  butter : '200'
}

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function updateObjectWithKeyAndValue(object, key, value){
  
  return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}