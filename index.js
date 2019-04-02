var recipes = {
  someKey: 'someValue'
}

function updateObjectWithKeyAndValue(recipes, someKey, someValue) {
  return Object.assign({}, recipes, {[someKey]: someValue});
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, someKey, someValue) {
  recipes[someKey] = someValue;
  return recipes;
}

function deleteFromObjectByKey(recipes, someKey) {
  let newObj = Object.assign({}, recipes, someKey);
  delete newObj[someKey];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(recipes, someKey) {
  delete recipes[someKey];
  return recipes;
}
