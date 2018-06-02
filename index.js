var objects = recipes;
var recipes = {
  prop: 1,
  prop2: 2,
};

function updateObjectWithKeyAndValue(object, key, value)
{ var object = recipes;
var key = 2;
object.key = value; 
return object;
;}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
 
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key)//non destructive
{ var newObj = Object.assign({}, object);

delete newObj[key];
return newObj;

  
}

function destructivelyDeleteFromObjectByKey(object, key)
{ delete object[key];
return object;
  
;}

