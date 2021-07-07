var recipes = {
  eggs: 3,
  flour: '1 cup',
  milk: '1 cup'
}

function updateObjectWithKeyAndValue(obj, key, value){
  recipes = Object.assign({}, obj, {[key]: value});
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var clone = Object.assign({}, recipes);
  delete recipes[key];
  return recipes;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
