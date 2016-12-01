var recipes = {
  chicken_Pesto: ['1lb chicken', '1 jar pesto', '2 tomatoes', '1 cup mozz']
};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key) {
  return Object.assign({})
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}
