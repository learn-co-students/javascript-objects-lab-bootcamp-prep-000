var recipes = {
  cake: 'sugar, butter, eggs, vanilla extract, flour, baking powder, milk',
  smoothie: 'fruit, milk, ice'
} // recipes
 function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
} // updateObjectWithKeyAndValue
 function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 object[key] = value
 return object
} // destructivelyUpdateObjectWithKeyAndValue
 function deleteFromObjectByKey(object, key) {
  var newRecipe = Object.assign({}, object)
  newRecipe // { foo: 'bar' }
  delete newRecipe.key // true
  return newRecipe
} // deleteFromObjectByKey
 function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object
} // destructivelyUpdateObjectWithKeyAndValue