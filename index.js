var recipes = {torta: 'mela'}

function updateObjectWithKeyAndValue(object, key, value){

  return Object.assign({}, object, {[key]:value})
}

updateObjectWithKeyAndValue(recipes, "plumcake", "banana");

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){

  object[key]= value
  return object
}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'minestrone','verdure');

function deleteFromObjectByKey(object, key){

  delete object.key
  return object
}

deleteFromObjectByKey(recipes, "torta")
deleteFromObjectByKey(recipes, "minestrone")
