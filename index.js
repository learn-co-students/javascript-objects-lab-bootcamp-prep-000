var recipes = new Object({ key: 'value1' })

function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value })
}



function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key) {
  const cloneObj = Object.assign({}, object)
  delete cloneObj[key]
  return cloneObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
 
  delete object[key]
  return object
}
