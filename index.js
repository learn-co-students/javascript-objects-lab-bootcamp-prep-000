var updateObjectWithKeyAndValue = (object, key, value) => {
  const updates = {}
  updates[key] = value
  return Object.assign({}, object, updates)
}

var destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  object[key] = value
  return object
}

var deleteFromObjectByKey = (object, key) => {
  let copy = Object.assign({}, object)
  delete copy[key]
  return copy
}

var destructivelyDeleteFromObjectByKey = (object, key) => {
  delete object[key]
  return object
}
