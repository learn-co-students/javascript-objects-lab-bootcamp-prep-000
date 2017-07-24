var recipes = new Object();

const updateObjectWithKeyAndValue = (object, key, value) => {
  var recipes = Object.assign({}, object);
  recipes[key] = value;
  return recipes;
}

const destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  object[key] = value;
  return object;
}

const deleteFromObjectByKey = (object, key) => {
  var nObject = Object.assign({}, object);
  delete nObject.key;
  return nObject;
}

const destructivelyDeleteFromObjectByKey = (object, key) => {
  delete object.key;
  return object;
}
