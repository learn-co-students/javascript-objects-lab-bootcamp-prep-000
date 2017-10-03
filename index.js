//creates a new object named recipes
var recipes = {};

//returns an object with the orignal key value pairs and the new key value pair. leaves original object intact
function updateObjectWithKeyAndValue(object, key, value)
{
  return Object.assign({}, object, { [key]: value })
};


//updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object
function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  object[key] = value;
  return object;
};

//deletes `key` from a clone of object and returns the new object (it is non-destructive)
function deleteFromObjectByKey(object, key)
{
  var newObj = Object.assign({}, object);
  delete newObj[key]
  return newObj;
};

//returns object without the delete key/value pair & modifies the original object
function destructivelyDeleteFromObjectByKey(object, key)
{
  delete object[key];
  return object;
};
