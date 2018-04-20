
var recipes = { }

//Non destructively
function updateObjectWithKeyAndValue(obj, key, value)
{
   var objClone = Object.assign({}, obj, {[key] : value});
   return objClone;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(obj, key)
{
  var objClone = Object.assign({}, obj);
  delete objClone[key];
  return objClone;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}
