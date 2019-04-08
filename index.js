var recipes = {
  'Egg Sandwich': ['Bread', 'Eggs', 'Onions', 'Salt', 'Pepper']
};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
object[key] = value;
return object;
}

function deleteFromObjectByKey(object, key) {
  let newObj = Object.assign({}, object);
  
  return delete newObj[key];
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key];
}

