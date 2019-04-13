var recipes = {cake:'eggs'};

function updateObjectWithKeyAndValue(object, key, value){
   return Object.assign({}, object, { [key]: value })
}

function deleteFromObjectByKey(object, key){
  delete recipes [key];
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object
}
