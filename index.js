var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
recipes =
  {
  prop : 1,
  prop2 : 2
  }
return recipes;
};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
};

function deleteFromObjectByKey(object, key){
  return Object.assign({}, recipes);
};

function destructivelyDeleteFromObjectByKey(object, key){
  delete recipes.prop;
  return recipes;

};
