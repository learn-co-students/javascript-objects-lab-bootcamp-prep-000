var recipes = {
  prop: 1
}

var newRecipes = {
  
}

function updateObjectWithKeyAndValue(obj, key, value) {
  
  return Object.assign({}, obj, {[key]: value }) 
}

newRecipes = updateObjectWithKeyAndValue(recipes, 'prop2', 2)

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  
  return obj
}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'prop2', 2)

  var newRecipes = {
  
  }
  
function deleteFromObjectByKey(obj, key) {
  
    obj = Object.assign({}, recipes)
    
    delete obj.prop
    
    return obj
}

console.log(newRecipes)
deleteFromObjectByKey(newRecipes, 'prop')
console.log(newRecipes)

function destructivelyDeleteFromObjectByKey(obj, key) {
    delete obj.prop
    
    return obj
}

destructivelyDeleteFromObjectByKey(recipe, 'prop')
  

