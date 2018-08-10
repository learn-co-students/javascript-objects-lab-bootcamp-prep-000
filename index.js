var recipes = {prop: 1};

function updateObjectWithKeyAndValue(a, b, c) { 
    return Object.assign({}, a, { [b]:c } ) }
function destructivelyUpdateObjectWithKeyAndValue(a, b, c) {
    a[b] = c; return a}
function deleteFromObjectByKey(a, b) {
    var newRecipes = Object.assign({}, a);
    delete newRecipes[b]; 
    return newRecipes}
function destructivelyDeleteFromObjectByKey(a, b) {
    delete a[b]; return a}

updateObjectWithKeyAndValue(recipes, prop2, 2);
destructivelyUpdateObjectWithKeyAndValue(recipes, prop, "prop: 1, prop2: 2");
deleteFromObjectByKey(recipes, prop);
destructivelyDeleteFromObjectByKey(recipes, prop);