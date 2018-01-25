var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value;
  return recipes;
} 

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, obj)
  delete newObj.key;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(recipe, key){
  return delete recipe[key];
}


var obj = { foo: 'bar' }
 
var newObj = Object.assign({}, obj)
 
newObj // { foo: 'bar' }
 
delete newObj.foo // true
 
newObj // {}
 
obj // { foo: 'bar' }