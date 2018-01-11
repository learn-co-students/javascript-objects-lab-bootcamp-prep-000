var recipes = {re1: 'I am not a recipe'};

function updateObjectWithKeyAndValue(objectName, key, value){
  var newObj = Object.assign({}, objectName, {[key]: value})
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(objectName, key, value){
  Object.assign(objectName, {[key]: value})
  return objectName
}

function deleteFromObjectByKey(objectName, key){
  var newObj = Object.assign({}, objectName)
  delete newObj[key]
  return newObj
} 

function destructivelyDeleteFromObjectByKey(objectName, key){
  delete objectName[key]
  return objectName
}