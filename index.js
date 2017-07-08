var recipes = {}

function updateObjectWithKeyAndValue(argObject, argKey, argValue) {
  return Object.assign({}, argObject, {[argKey]: argValue})
}

function destructivelyUpdateObjectWithKeyAndValue(argObject, argKey, argValue) {
  argObject[argKey] = argValue
  return argObject
}

function deleteFromObjectByKey(argObject, argKey) {
  var _objClone = {}
  Object.assign(_objClone, argObject)
  delete _objClone[argKey]
  return _objClone
}

function destructivelyDeleteFromObjectByKey(argObject, argKey) {
  delete argObject[argKey]
  return argObject
}
