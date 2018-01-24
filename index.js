var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
 return Object.assign({}, object, { [key]: value });
}updateObjectWithKeyAndValue(recipes, 'prop2', 2);

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}destructivelyUpdateObjectWithKeyAndValue(recipes, 'prop2', 2);

function deleteFromObjectByKey(object,key){
  const newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
}deleteFromObjectByKey(recipes, 'prop2');

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}destructivelyDeleteFromObjectByKey(recipes, 'prop2');