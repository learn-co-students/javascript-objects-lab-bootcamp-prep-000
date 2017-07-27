var recipes = {};

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function updateObjectWithKeyAndValue(object, key, value) {
  var copy = Object.assign({}, object)
  copy[key] = value
  return copy
}


function deleteFromObjectByKey(object, key) {
  var copy = Object.assign({}, object)
  delete copy[key]
  return copy;
}

// recipes = {cereal: [milk, oats], cake: "frosting"}
//destructivelyDeleteFromObjectByKey(recipes, cake)
//

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
