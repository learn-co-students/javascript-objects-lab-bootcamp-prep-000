var recipes = {};
function updateObjectWithKeyAndValue(object1, key, value){
  
  object1[key] = value;
  return object1;
}

function updateObjectWithKeyAndValue(object1, key, value){
  
 
  
  return  Object.assign({}, object1, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object1, key, value){
  
   object1[key] = value;
  return object1;
}

function deleteFromObjectByKey(object1, key){
  return delete Object.assign({}, object1).key;
}

function destructivelyDeleteFromObjectByKey(object1, key){
  return delete object1[key];
}



