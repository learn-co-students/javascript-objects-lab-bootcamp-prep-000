var recipes = {prop: "1"};

function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign({}, recipes, {["prop2"]: "2"});
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
 recipes["prop2"] = "2";
 return recipes;
}
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, recipes);
  delete newObj[key]
  return newObj
}
function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes[key];
  return recipes;
}