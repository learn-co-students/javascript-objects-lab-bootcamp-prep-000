var recipes = {
  ingredients: 'amount'
}

function updateObjectWithKeyAndValue(obj, ingredients, amount) {
  return Object.assign({}, obj, {[ingredients]: amount})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, ingredients, amount) {
  obj[ingredients] = amount;
  return obj;
}

function deleteFromObjectByKey(obj, ingredients) {
  var newObj = Object.assign({}, obj)
  delete newObj[ingredients];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(obj, ingredients) {
  delete obj[ingredients]
  return obj;
}
