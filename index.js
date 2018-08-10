var recipes = {prop:1};
var object = {prop: 1}
function updateObjectWithKeyAndValue(object, key, value)
{
   var newObj = object;
   var newObj = Object.assign({prop: 1}, value);
  newObj[key]=value;
  return newObj;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  object[key]=value;
  return object;
}
function deleteFromObjectByKey(object, key)
{
  var newObj = Object.assign(true,{},object);
  delete newObj[key];
  return newObj;
}
function destructivelyDeleteFromObjectByKey(object, key)
{
  return delete object[key];
}
