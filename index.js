//Test 1: Create Object "recipes"

var recipes = {Chili: "Tomatoes"};





//Test 2: Function that Returns Original with Added Key/Value Pair

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

updateObjectWithKeyAndValue(recipes, "Grilled Cheese", "Gouda");





//Test 3: Function that Returns Clone of Object with New Data 

function updateObjectWithKeyAndValue(object, key, value) {
  var newRecipes = Object.assign({}, object);
  newRecipes[key] = value;
  return newRecipes;
}

updateObjectWithKeyAndValue(recipes, "Curry Chicken", "Chicken");





//Test 4: Destructively Update Original Object

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

destructivelyUpdateObjectWithKeyAndValue(recipes, "Lamb Chops", "Lamb");





//Test 5 and 6: Delete From Clone of Object and Return New Object 

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
}

deleteFromObjectByKey(recipes, "Lamb Chops");





//Test 7 and 8: Destructively Delete Key-Value Pair

function destructivelyDeleteFromObjectByKey(object,key) {
  delete object[key];
  return object;
}

destructivelyDeleteFromObjectByKey(recipes, "Lamb Chops");








