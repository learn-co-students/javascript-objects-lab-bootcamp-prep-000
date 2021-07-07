var recipes = {}

function updateObjectWithKeyAndValue(object, key, value)
{
  var prompt1 = Object.assign({},object)
  prompt1[key] = value
  return prompt1
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key)
{
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}
function destructivelyDeleteFromObjectByKey(object, key)
{
  delete object[key]
  return object
}




