var recipes = new Object();
// clean recommended way
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object,{[key]:value})
}
// edits actual passed array, not recommended
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   object[key] = value;
   return object;
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({},object);
  delete newObj.key;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  return object;
}
