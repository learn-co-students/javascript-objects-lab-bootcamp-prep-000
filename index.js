var recipes = {};


function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {prop2 : value})
  
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
  return Object.assign(object, {prop2 : value})
}

function deleteFromObjectByKey(object, key){
  var nObj = Object.assign({},object)
  delete nObj[key];
  return nObj;
  
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}