var recipes = new Object ({});

function updateObjectWithKeyAndValue(object, key, value)
{
  //var obj = { key: value};
  return Object.assign({}, object, {[key]: value});

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  object[key] = value;

  return object;

}

function deleteFromObjectByKey(object, key)
{

  var newObj = Object.assign({}, object);

  return delete newObj.key; // true

}

function destructivelyDeleteFromObjectByKey(object, key)
{
  return delete object[key];

}
