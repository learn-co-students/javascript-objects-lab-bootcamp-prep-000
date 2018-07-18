
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
  return Object.assign({}, object)
}