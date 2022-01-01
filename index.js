const recipes = {
  Spices: [salt, pepper, 'garlic powder'],
  Protein: chicken,
  Vegetable: kale
}

function updateObjectWithKeyAndValue (obj, key, value) {
  var newObject = Object.assign({}, obj, {[key]:value});
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue (obj, key, value) {
   obj[key] = value;
   return obj
}

function deleteFromObjectByKey (obj, key) {
  var newObject = Object.assign({}, obj);
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromObjectByKey (obj, key) {
  return delete obj[key];
}