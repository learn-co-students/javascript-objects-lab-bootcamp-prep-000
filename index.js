var recipes = {prop: 1};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, { prop2: 2 });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

destructivelyUpdateObjectWithKeyAndValue(recipes, prop2, 2);

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign ({}, recipes);
  delete recipes.prop;
  return recipes;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}

destructivelyDeleteFromObjectByKey(recipes, prop);
