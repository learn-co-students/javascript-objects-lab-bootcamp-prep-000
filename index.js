var recipes = { 
  Breakfast: 'Eggs',
  Lunch: 'Sandwhich',
  Dinner: 'Steak' 
  
};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  return Object.assign({}, { [object]: key })
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var newObj = { Object: key }
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}