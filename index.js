var recipes = {};

function updateObjectWithKeyAndValue(object, key, value)
{
  var obj = { prop: 1 };
  var newObj = Object.assign({}, object, { [key]: value });
  return newObj;
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  var obj = { prop: 1 };
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key)
{
  var obj = { prop: 1 };
  var newObj = Object.assign({}, obj);
  delete newObj.prop;
  return {};
}

function destructivelyDeleteFromObjectByKey(object, key)
{
  delete object.key;
  return {};
}
