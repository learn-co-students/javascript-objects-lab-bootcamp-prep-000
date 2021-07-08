var recipeParts = [
  'Ingredients',
  'Directions'
]
var recipes = new Object({
  Pizza: [recipeParts],
  Burrito: [recipeParts],
  Hotdog: [recipeParts]
})

function updateObjectWithKeyAndValue(obj, key, val) {
  return Object.assign({}, obj, { [key]: val });
}

function destructivelyUpdateObjectWithKeyAndValue (obj, key, val) {
  obj[key] = val;
  return obj;
}

function deleteFromObjectByKey(obj, key) {
  var newObj = Object.assign({}, obj);
  return delete newObj[key];
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}