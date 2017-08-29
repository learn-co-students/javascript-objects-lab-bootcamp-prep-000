var recipes = { neele : 'steak', emeril : 'creole etoufee' };

function updateObjectWithKeyAndValue(recipes, cook, entree) {
    return Object.assign({}, recipes, { [cook]: entree });
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, cook, entree) {
    recipes[cook] = (entree);
    return recipes;
}

function deleteFromObjectByKey(recipes, cook) {
    const newRecipes = Object.assign({}, recipes);
    delete recipes.cook;
    return newRecipes;
}

function destructivelyDeleteFromObjectByKey(recipes, cook) {
    delete recipes.cook;
    return recipes;
}
