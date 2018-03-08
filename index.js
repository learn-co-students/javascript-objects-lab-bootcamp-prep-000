var recipes = {
  strawberry: '2 frozen cups',
  banana: '1 fresh',
  milk: '1 cup',
  honey: '1 tablespoon'
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object)
  delete newObject[key];
  return newObject;
}


function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}