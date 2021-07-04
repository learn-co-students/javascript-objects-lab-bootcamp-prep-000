function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign ({},obj,{[key]:value}); 
}

const recipes= {};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]=value; 
  return object;
}

function deleteFromObjectByKey(object, key) {
let clone= Object.assign ({}, object);
 delete clone[key];
  return clone; 
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
