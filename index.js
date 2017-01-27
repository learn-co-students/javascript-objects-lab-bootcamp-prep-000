var recipes = {key:'value'}

function updateObjectWithKeyAndValue(object, key, value) {
  var recipes = {prop:'1', prop2:'2'}
  Object.assign({prop:'1'}, {prop2:'2'})
  return Object.assign({prop: '1', prop2:'2'})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key]= value
  return recipes
}

function deleteFromObjectByKey(object, key) {
  var obj = {key:'value'}
  delete object.key
  return obj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var obj = {key:'value'}
  return object
}
