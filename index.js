var recipes = {
  In1: "Eggs",
  In2: "Flour",
  In3: "Frosting",
}
function updateObjectWithKeyAndValue(obj, key, value) {
  Object.assign(obj, { [key]: value })
  return obj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]= value
  return object
}

function deleteFromObjectByKey(object, key) {
  var obj = Object.assign({}, object)
  delete obj[key];
  return obj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}
