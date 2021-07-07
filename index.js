function updateObjectWithKeyAndValue(object, key, value)
{
  object[key] = value;
  return object;
}

function updateObjectWithKeyAndValue(object, key, value)
{
  var returnObject = Object.assign({}, object, {[key]:value});
  return returnObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key)
{
  var returnObject = Object.assign({},object);
  delete returnObject[key];
  return returnObject;
}


function destructivelyDeleteFromObjectByKey(object, key)
{
  delete object[key];
  return object;
}
