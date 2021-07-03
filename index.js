var recipes = {}

var obj = { prop: 1 }

function updateObjectWithKeyAndValue(object, key, value)
{
  var newObj = Object.assign({}, object)
  newObj[key] = value
  return newObj
}

updateObjectWithKeyAndValue({prop: 1}, 'prop2', 2);

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  object[key] = value
  return object
}

destructivelyUpdateObjectWithKeyAndValue({prop: 1}, 'prop2', 2);

function deleteFromObjectByKey(object, key)
{
  var newObj = Object.assign({}, object);
  delete newObj[key]
  return newObj
}

deleteFromObjectByKey({prop: 1}, 'prop');

function destructivelyDeleteFromObjectByKey(object, key)
{
  delete object[key]
  return object
}