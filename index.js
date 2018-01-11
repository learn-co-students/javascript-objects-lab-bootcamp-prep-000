var recipes = new Object({breakfast:"eggs"})
function updateObjectWithKeyAndValue(object,key,value)
{
  object = Object.assign({},object,{[key]:value})
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value)
{
  object[key]=value
  return object
}
function deleteFromObjectWithKeyAndValue(object,key,value)
{
  
}
function deleteFromObjectByKey(object,key)
{
  object = Object.assign({},object,{[key]:value})
  
  return object
}
function destructivelyDeleteFromObjectByKey(object,key)
{

  delete object.key
  return object
}