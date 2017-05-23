var recipes = {noodles: 10};

function updateObjectWithKeyAndValue(object, key, value) {

  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {

  object[key] = value

  return object
}

function deleteFromObjectByKey(obj, key) {

  delete obj.key

  return Object.assign({}, obj, key)
}
function destructivelyDeleteFromObjectByKey(object, key) {

  delete object.key

  return object
}
