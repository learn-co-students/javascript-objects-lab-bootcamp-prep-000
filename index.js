var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  
  return Object.assign({}, object, {[key] : value})
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
  object[key] = value
  return object
  
}

// non-destructively deleteFromObjectByKey
function deleteFromObjectByKey(object, key){
  var obj = { object : key };
  var newObj = Object.assign({}, obj);
  delete newObj.object;

  return obj; 
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}