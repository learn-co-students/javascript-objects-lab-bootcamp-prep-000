var recipes = {}

function updateObjectWithKeyAndValue(object, key, value)
{
  var newObject = Object.assign({}, object, {[key] : value})
  return newObject
}

function deleteFromObjectByKey(object, key)
{
  var newObject = Object.assign({}, object)
  delete newObject[key]
  return newObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  object[key] = value
  return object
}

function destructivelyDeleteFromObjectByKey(object, key)
{
  delete object[key]
  return object
}