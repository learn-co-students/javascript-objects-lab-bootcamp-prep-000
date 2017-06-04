var recipes = {}

function updateObjectWithKeyAndValue(obj,key,value){
  var newObj = obj
  newObj [key]= value;
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key]=value;
  return obj;
}

function destructivelyDeleteFromObjectByKey (obj,key){
  delete obj.key;
  return obj;
}

function deleteFromObjectByKey (obj,key){
  var newObj = obj;
  delete newObj.key;
  return newObj;
}
