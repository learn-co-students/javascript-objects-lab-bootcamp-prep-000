var recipes={};
function updateObjectWithKeyAndValue(object,key,value)
{
var obj={};
Object.assign(obj,object,{[key]:value});
return obj;
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  Object.assign(object,{[key]:value});
  return object;
}
function destructivelyDeleteFromObjectByKey(object,key)
{
  delete object[key];
  return object;
}
function deleteFromObjectByKey(object, key)
{
  var obj={};
  Object.assign(obj,object);
  delete obj[key];
  return obj;
}
