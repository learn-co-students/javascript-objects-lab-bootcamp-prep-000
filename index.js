var recipes = {}


// create a function updateObjectWithKeyAndValue that takes in 3 parameters (object, key, value) and returns a NEW object that contains the original key value pairs and the new key value pair
//Object.assign({targetObject},oldObject,{[key]:value})
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {
    [key]: value
  })
};

// create a function destructivelyUpdateObjectWithKeyAndValue  that takes in 3 paraemeters (object, key, value) and returns an updated object with the new key value pair
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
};

// create a function deleteFromObjectByKey t hat takes in 2 parameters (object, key) and creates a new object newRecipe which contains the original key-value pairs from the object recipes, deletes the key value pair and return that new object
function deleteFromObjectByKey(object, key) {
  var newRecipe = Object.assign({}, object)
  delete newRecipe[key]
  return newRecipe
};

//create a function destructivelyDeleteFromObjectByKey that takes in 2 parameters (object, key) and deletes the key value pair from the object and returns the updated object
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
};
