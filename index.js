// recipes  = updates

var recipes = {  key : value };
var object  = object;
var key = key;
var value = value;

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{   object[key] = value
  return  object };

function deleteFromObjectByKey(object, key)
   {  var obj = { object : key }
      var newObj = Object.assign({}, obj)
      delete object.key
      return object, key };


function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })  };

function destructivelyDeleteFromObjectByKey(object, key)
{  delete object[key];
    return object, key};

//destructivelyDeleteFromObjectByKey();

// end of index.js
