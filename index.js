var recipes = {Sugar: "1 cup"}

function updateObjectWithKeyAndValue(newObject, newKey, newValue){
  var tempObject = Object.assign({}, newObject)
  tempObject[newKey] = newValue
  return tempObject
}

function destructivelyUpdateObjectWithKeyAndValue(newObject, newKey, newValue){
  newObject[newKey] = newValue
  return newObject
}

function deleteFromObjectByKey(newObject, newKey){
  var tempObject = Object.assign({}, newObject)
  delete tempObject[newKey]
  return tempObject
}

function destructivelyDeleteFromObjectByKey(newObject, newKey){
  delete newObject[newKey]
  return newObject
}
