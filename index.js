var recipes = {
  prop: 1
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

updateObjectWithKeyAndValue(recipes, 'prop2', 2);

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'prop2', 2);

function deleteFromObjectByKey(object, key) {
  return Object.assign({}, object, { [key]: undefined }) // rather than delete we make the value of the key undefined using the non-destructive additive statement. This will change the statement.
}

deleteFromObjectByKey(recipes, 'prop')

function destructivelyDeleteFromObjectByKey(object, key) {
  object[key] = undefined;
  return object
}

destructivelyDeleteFromObjectByKey(recipes, 'prop');
