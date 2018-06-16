var recipes = {}
/////////////////////////////////////////////////////////////////////////////////////////////////////


function updateObjectWithKeyAndValue(obj, key, value)

{
  return Object.assign({}, obj, { [key]: value })
}


/////////////////////////////////////////////////////////////////////////////////////////////////////


function destructivelyUpdateObjectWithKeyAndValue(object, key, value)

{
  
  object[key] = value;
  return object;
  
}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'prop', 1)
destructivelyUpdateObjectWithKeyAndValue(recipes, 'prop2', 2)

/////////////////////////////////////////////////////////////////////////////////////////////////////

function deleteFromObjectByKey(object, key)

{
  
  var newObject = Object.assign({}, object)
  delete newObject[key];
  console.log(newObject);
  return newObject;
  
}

deleteFromObjectByKey (recipes, 'prop');
console.log(recipes)
//////////////////////////////////////////////////////////////////////////////////////////////////

function destructivelyDeleteFromObjectByKey (object, key)

{
  
  delete object[key];
  return object;
  
}