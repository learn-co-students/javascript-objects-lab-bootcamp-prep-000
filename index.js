var recipes = new Object();
var newObject = {dummy:"flour"};
function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({},recipes,{[key]:value});
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
 recipes[key]=value;
 return recipes;
}
function deleteFromObjectByKey(recipes, key){
  delete recipes.key;
  return newObject;
}
function destructivelyDeleteFromObjectByKey(recipes, key) {
    delete recipes[key];
    return key;
}
