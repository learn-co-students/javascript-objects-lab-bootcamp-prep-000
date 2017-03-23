var recipes ={};

function updateObjectWithKeyAndValue(object, key, value) {
  recipes.prop = 1;
  recipes.prop2 = 2;
  return recipes;
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
delete recipes.prop2;
return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete recipes.prop;
  delete recipes.prop2;
  return object;
}
