var recipes= {};


function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign ({}, obj, {[key]: value}) ;
}

function destructivelyUpdateObjectWithKeyAndValue (obj,key,value){
  obj[key]=value
  return obj;
}

function destructivelyDeleteFromObjectByKey (object,key){
  delete object.key;
  return object
}

function deleteFromObjectByKey(object,key){
  var newObj= Object.assign ({}, recipes)
  delete recipes.key
  return newObj;
}
