var recipes = {prop: '1', prop2: '2'}
function updateObjectWithKeyAndValue (object, key, value){
  Object.assign({}, recipes, {flour: '3 cups'})
  return recipes
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
   object['prop2'] = '2'
   return object
}
function deleteFromObjectByKey(recipes, prop) {
  var recipe2 = Object.assign({},recipes)
  delete recipe2.prop
  return recipe2
}
function destructivelyDeleteFromObjectByKey(recipes, prop){delete recipes['prop']
  return recipes
}
