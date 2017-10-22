var recipes = {flour: "1 cup"}

var object = {prop: 1}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {["prop2"]: '2'})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object.prop2 = 2

  return object
}

function deleteFromObjectByKey(object, key) {
  return Object.assign({}, "prop2", {})
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.prop;

  return object
}
