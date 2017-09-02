var recipes = new Object({Chocolate: '1gr'});

function updateObjectWithKeyAndValue(object, key, value){
  var newObject = object[key];
  newObject = Object.assign({}, object);
  newObject[key] = value;
  return newObject;
}

updateObjectWithKeyAndValue(recipes, 'Foo:', 'Bar')


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'sugar:','one spoon')

function deleteFromObjectByKey(object,key){
  var newObject = object[key]
  delete newObject[key]
  return newObject
}

deleteFromObjectByKey(recipes, 'sugar:')

function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key]
  return object
}
