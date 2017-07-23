var recipes = {
  prop: 1,
}

function updateObjectWithKeyAndValue(object, key, value){
  recipes[key] = value;
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  object = {
    prop: 1
  }
  var newObj = Object.assign({}, object);
  delete object[key];
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
