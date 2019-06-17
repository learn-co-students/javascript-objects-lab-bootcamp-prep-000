var recipes = {torta: 'mela'}

function updateObjectWithKeyAndValue(object, key, value){

  return Object.assign({}, object, {[key]:value})
}

updateObjectWithKeyAndValue(recipes, "plumcake", "banana");

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){

  object[key]= value
  return object
}

destructivelyUpdateObjectWithKeyAndValue(recipes, "minestrone","verdure");

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

deleteFromObjectByKey(recipes, "plumcake");

function destructivelyDeleteFromObjectByKey(object, key) {

  delete object[key]
  return object
}

destructivelyDeleteFromObjectByKey(recipes, "minestrone");
