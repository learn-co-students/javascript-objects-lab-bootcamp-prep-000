const recipes = {prop: 1}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(recipes, { [key]: value })
}
updateObjectWithKeyAndValue(recipes, prop2, 2)

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
 
  return obj
}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'prop', '1')

function deleteFromObjectByKey(object, key) {
  return delete recipes.prop
}
removeFromPlaylist(recipes, 'prop')

function destructivelyDeleteFromObjectByKey(object, key) {
var obj = { prop: '1' }
return delete object[key]
}
destructivelyDeleteFromObjectByKey(obj, 'prop')

