var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
   object[key] = value;
   return object;
}
function deleteFromObjectByKey(RecipeObject,key) {
var newObj = Object.assign({}, RecipeObject );
delete newObj[key];
return newObj;
}
function destructivelyDeleteFromObjectByKey (RecipeObject,key) {

    delete RecipeObject[key];
    return RecipeObject;
}
