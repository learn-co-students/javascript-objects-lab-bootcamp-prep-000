var recipes = {
  ingredients: "eggs",
  ingredients:"cheese",
  ingredients:"ham"
}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value

  return obj
}

function deleteFromObjectByKey(object, key) {
  return delete object.key;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key];
}
