
var recipes = new Object({cookies: 'flour, sugar, butter, water'});

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value});
}

updateObjectWithKeyAndValue(recipes, 'Baked Chicken', "chicken, seasoning");

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

destructivelyUpdateObjectWithKeyAndValue(recipes, Salsa, "tomatoes & other stuff");

function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
}

deleteFromObjectByKey(recipes, 'cookies');

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
var recipes2 = new Object ({cake: 'flour & other stuff'});

destructivelyDeleteFromObjectByKey(recipes2, 'cake');