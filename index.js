var recipes = {

}

function updateObjectWithKeyAndValue (object, key, value) {
  return Object.assign({}, object, { [key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value

  return object
}

// Delete From Object By Key
function deleteFromObjectByKey(object, key) {
return Object.assign({}, {object, key})
delete object.key
return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
delete object[key]
return object
}
