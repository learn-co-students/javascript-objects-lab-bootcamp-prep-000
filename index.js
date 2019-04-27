//Objects defines a `recipes` object:
let recipes= {};
//Objects updateObjectWithKeyAndValue(object, key, value) returns an object with the ori
//gnal key value pairs and the new key value pair:
function updateObjectWithKeyAndValue(object, key, value){
   return Object.assign({}, object, { [key]: value });
}

//Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates `object`
//with the given `key` and `value` (it is destructive) and returns the entire updated object:
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key] : value});
  //object[key]= value;
  //return object;
}

//Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and re
//turns the new object (it is non-destructive):
function deleteFromObjectByKey(object, key){
  let copyObj = object;
  delete copyObj[key];
  return copyObj;
}
