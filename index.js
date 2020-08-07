var recipes = new Object({cereal: "milk, cheerios", toast: "bread, butter"});
function updateObjectWithKeyAndValue(recipes, food, ingredients){return Object.assign({}, recipes, {[food]: ingredients})}
function destructivelyUpdateObjectWithKeyAndValue(recipes, food,ingredients){recipes[food] = ingredients; return recipes}
function deleteFromObjectByKey(recipes, food){var newRecipes = Object.assign({},recipes); delete newRecipes[food]; return newRecipes}
function destructivelyDeleteFromObjectByKey(recipes, food){delete recipes[food]; return recipes}
