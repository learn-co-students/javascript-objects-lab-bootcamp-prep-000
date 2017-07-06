var recipes = { potato: "cheese"};

function updateObjectWithKeyAndValue(object, key, value) {
object[key] = value;
return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 object[key] = value;
 return object;
}

function deleteFromObjectByKey(object, key) {
  delete key[object]
  return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  object[key]
  return object;
}
