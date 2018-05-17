const recipes = {
  lasagna: ['tomato sauce', 'meat', 'cheese', 'pasta'],
  'peanut butter jelly sandwich': ['bread', 'peanut butter', 'jelly'],
  pizza: ['dough', 'sauce', 'cheese', 'pepperoni']
};

function updateObjectWithKeyAndValue(object, key, value) {
  const newObj = Object.assign({}, object);
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  const newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}