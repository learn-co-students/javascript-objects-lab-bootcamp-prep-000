var recipes = {
  spinach: 'one pound',
  garlic: 'one clove'
}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign(
    {}, object, { [key]: value} );
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign(
    {}, [key]);
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var newObj = delete object.key;
    return object;
}
