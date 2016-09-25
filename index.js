var recipes = {};
function updateObjectWithKeyAndValue(obj,key,value){
  return Object.assign({},obj,{[key]:value})
}
function destructivelyUpdateObjectWithKeyAndValue(obj,key,value){
  obj[key]=value;
  return obj;
}
function deleteFromObjectByKey(object, key){
  var temp = Object.assign({},object);
  delete temp[key];
  return temp;
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
