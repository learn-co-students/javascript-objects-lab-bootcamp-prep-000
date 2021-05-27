var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object, key);
  delete newObj.key;
  return newObj;
}
 function deleteFromObjectByKey(object, key){
   var newObj = Object.assign({}, object, key);
   delete newObj.key;
   return newObj;
 }
