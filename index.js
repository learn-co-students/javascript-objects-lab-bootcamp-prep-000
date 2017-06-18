var recipes = {
	INGREDIENT: "QUANTITY",
}

// ---------------------- Destructive Functions ------------------------------

// Removes an item from our recipe and mutates the original recipe.
function destructivelyDeleteFromObjectByKey(recipe, ingredient) {
	delete recipe.ingredient
  return recipe
}

// Adds an item to our recipe and mutates the original recipe.
// function destructivelyAddItem(recipe, ingredient, quantity) {
// 	recipe[ingredient] = quantity
// 	return recipe
// }

// Updates the object with a new key and value and mutates the original.
function destructivelyUpdateObjectWithKeyAndValue(recipe, ingredient, quantity) {
  recipe[ingredient] = quantity
  return recipe
}


// ---------------------- Non-destructive Functions --------------------------

// Removes an item from our recipe without mutating the original recipe.
function deleteFromObjectByKey(recipe, ingredient) {
  delete recipe.ingredient
  return recipe
}

// Adds an item to our recipe without mutating the original recipe
function updateObjectWithKeyAndValue(recipe, ingredient, quantity) {
	return Object.assign({}, recipe, { [ingredient]: quantity })
}

// ------------------------ Function test-calls ------------------------------

// console.log(recipes)
// destructivelyAddItem(recipes, 'bacon', '1lb')
// destructivelyAddItem(recipes, 'eggs', 'two')
// destructivelyAddItem(recipes, 'cheese', '6oz')
// destructivelyAddItem(recipes, 'tomato', '1 whole tomato')
// console.log(recipes)

// console.log(recipes)
// destructivelyRemoveItem(recipes, 'bacon') // Parameter passed as string?
// console.log(recipes)
// delete recipes.bacon // This line doesn't work inside a function call...
// console.log(recipes)
