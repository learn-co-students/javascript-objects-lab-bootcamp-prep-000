var recipes = {prop: 1}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}
updateObjectWithKeyAndValue(recipes, 'prop2', 2)

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}
destructivelyUpdateObjectWithKeyAndValue(recipes, 'prop2', 2)

function deleteFromObjectByKey(object, key, value){
  return delete Object.assign({}, object, { [key]: value })
}
deleteFromObjectByKey(recipes, 'prop', 1)

function destructivelyDeleteFromObjectByKey(object, key, value){
  object[key] = value
  return delete object.key
}
destructivelyDeleteFromObjectByKey(recipes, 'prop', 1)
