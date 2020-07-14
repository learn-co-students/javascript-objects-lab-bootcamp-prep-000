var recipes = {};


function updateObjectWithKeyAndValue(object, key, value){

  return Object.assign({}, object, { [key]: value });
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){

  object[key] = value;
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key){

   delete object[key];
   return object;
}

var obj;
function deleteFromObjectByKey(object, key){

  obj = Object.assign({},object);
  delete obj[key];
  return obj;
}