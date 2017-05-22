var recipes = {
  protein: 'chicken',
  vegetable: 'carrots',
  starch: 'rice'
}

function updateObjectWithKeyAndValue(object, key, value) {
  return return Object.assign({}, object, { [key]: value })
}
updateObjectWithKeyAndValue(recipes,'snack','pudding')


function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}
destructivelyUpdateObjectWithKeyAndValue(recipes, 'fruit', 'apple')

function deleteFromObjectByKey(obj, key) {
  var newObj = Object.assign({}, obj)
  newObj
  delete newObj.key
  return obj
}
deleteFromObjectByKey(recipes, 'protein')

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj.key
  return obj
}
destructivelyDeleteFromObjectByKey(recipes,'protein')
