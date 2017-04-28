var recipes = {
  flour: "1 cup",
  sugar: "2 cups",
  eggs: 3,
  water: "1 cup"
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({}, object)

delete newObject.key

return object
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;

  return object
}
