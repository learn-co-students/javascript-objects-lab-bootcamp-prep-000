var recipes = {cake: '4 tier'};

function updateObjectWithKeyAndValue(object, key, value) {
  
  return Object.assign({}, object, {[key]: value});
}

updateObjectWithKeyAndValue(recipes, 'Cupcakes', '4 boxes')

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  
  return object
}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'Bread', '7 Loafs')

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object);
  delete newObject[key];
  
  return newObject
}

deleteFromObjectByKey(recipes, 'Bread')

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  
  return object
}

destructivelyDeleteFromObjectByKey(recipes, 'Cupcakes')