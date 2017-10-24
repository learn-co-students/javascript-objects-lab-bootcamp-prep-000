var recipes = new Object({ dish: "ingredients" });

function updateObjectWithKeyAndValue(recipes, dish, ingredients) {

  recipes[dish] = ingredients

  return recipes
}

/*updateObjectWithKeyAndValue(recipes, 'flour', 'eggs')

recipes*/
