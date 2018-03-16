var recipes = {};

function updateObjectWithKeyAndValue(object, key, value)
{
  var newRecipe = Object.assign({}, object);
  newRecipe[key] = value;
  return newRecipe;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key)
{
  var newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key)
{
  delete object[key];
  return object;
}