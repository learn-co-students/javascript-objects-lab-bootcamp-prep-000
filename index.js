var recipes = { prop: "1" };

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, {prop2 : "2"})
};

function destructivelyUpdateObjectWithKeyAndValue(object, prop, value) {
  object.prop2 = "2"
  return object
}

function deleteFromObjectByKey (object, key) {
  delete recipes.prop;
  return recipes
};

function destructivelyDeleteFromObjectByKey (object, key) {
  object.prop = undefined
  return object
}
