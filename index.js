// defines a `recipes` object:
var recipes = {}

// returns an object with the original key value pairs and the new key value pair:
function updateObjectWithKeyAndValue(object, key, value)
{
  var obj = { key: value }
  var retObj = object.assign({}, obj)
  return retObj
}

// it does not modify the original object, but rather returns a clone with the new data:
function updateObjectWithKeyAndValue(object, key, value)
{
  var retObj = Object.assign({}, recipes)
  retObj[key] = value
  return retObj
}
/*
// updates `object` with the given `key` and `value` (it is destructive) and returns theentire updated object:
function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  
}*/