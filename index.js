var recipes = new Object ({})

function updateObjectWithKeyAndValue (object, key, value)
{
  return Object.assign({}, object, {[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  object[key]= value
  return object
}

var obj={foo : 'bar'}
function deleteFromObjectByKey(object, key)
{
  delete object.key
  return obj
}

function destructDeleteFromObjectByKey(object, key)
{
  delete object.key
  return object
}

function destructivelyDeleteFromObjectByKey(object, key)
{
  delete object[key]
  return object
}
