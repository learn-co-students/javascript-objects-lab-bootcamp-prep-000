var recipes = {

}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })


}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;

  return object;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]

  return key
}


function deleteFromObjectByKey(object, key) {
  return delete Object.assign({}, object, {key})
}
