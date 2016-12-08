var recipes = {
  cookies: 'chocolate chip'
}

function updateObjectWithKeyAndValue(object, key, value)
{
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key)
{
  var newObj = Object.assign({}, object)
  delete newObj.cookies
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key)
{
  delete recipes.cookies
  return recipes
}
