let recipes = {
  sugar: 'too sweet',
  slat: 'too salty'
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value

  return obj
}

function deleteFromObjectByKey(object, key) {
  let result = Object.assign({}, object);
  delete result.key;
  return result;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return object;
}
