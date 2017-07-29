var recipes = { prop: 1 }

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, { [key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object["prop2"] = 2;
  return object
}

function deleteFromObjectByKey(object, key) {
  const newObj = Object.assign({}, recipes)

   delete newObj[key]

   return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]

   return object
}
