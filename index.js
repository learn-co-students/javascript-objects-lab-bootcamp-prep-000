var recipes = { neele : 'steak', emeril : 'creole etoufee' };

function updateObjectWithKeyAndValue(recipes, cook, entree) {
    recipes[cook] = (entree);
    return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, cook, entree) {
    recipes[cook] = (entree);
    return recipes;
}

function deleteFromObjectByKey(recipes, cook, entree) {
    delete recipes.cook;
    return recipes;
}

function destructivelyDeleteFromObjectByKey(recipes, cook, entree) {
    delete recipes.cook;
    return recipes;
}