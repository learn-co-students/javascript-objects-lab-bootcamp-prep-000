var recipes= {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}
// Note that the above way did not do this destructively, Instead we returned a net object with the Object command and assigned it the contents of the old object and then the key-value pair.

function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  object[key]=value;
 return object;
}

function deleteFromObjectByKey(object,key) {
  var newobj= Object.assign({},object)
  delete newobj[key];
  return newobj;
}

function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key];
  return object;
}