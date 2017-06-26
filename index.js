var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value)
{
  var objClone = Object.assign({},obj);
  return Object.assign({}, objClone, {[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(obj, key, value)
{
  var objClone = Object.assign({},obj);
  delete objClone[key];
  return objClone;
}

function destructivelyDeleteFromObjectByKey(object, key, value)
{
  delete object[key];
  return object;
}
