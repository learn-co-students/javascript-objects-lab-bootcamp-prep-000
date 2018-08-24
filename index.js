var recipes = new Object ({})
var obj = { prop: 1 }

function updateObjectWithKeyAndValue(object, key, value) {
recipes.prop = "1"
recipes.prop2 = "2"
return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj.prop;
  return key;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}