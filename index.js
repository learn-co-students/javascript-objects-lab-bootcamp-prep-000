var recipes = {flour:"3 cups"};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
object[key] = value;  
return object
}

function deleteFromObjectByKey(object, key) {
  Object.assign({},object)
  delete Object[key]
  return Object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

console.log(destructivelyUpdateObjectWithKeyAndValue(recipes, "eggs", "three"))
console.log(recipes)