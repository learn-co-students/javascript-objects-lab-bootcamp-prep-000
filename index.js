var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value)
{
  object[key] = value;
  var obj = Object.assign({}, object);
  return obj;
}

function deleteFromObjectByKey(object, key)
{
  object[key];
  var obj = Object.assign({}, object);
  delete obj[key];
  return obj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  object[key] = value;
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key)
{
  delete object[key];
  return object;
}
