var recipes = {eggs : 3, milk : 1, cheese : 2}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key] : value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, object, { [key] : value})
}

function deleteFromObjectByKey(object, key) {
  return Object.assign({}, object, { [key] : undefined} )
}

function destructivelyDeleteFromObjectByKey(object, key) { 
  return Object.assign(object, object, { [key] : undefined} )
}
  