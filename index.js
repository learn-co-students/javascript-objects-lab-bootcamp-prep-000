var recipes = {foo: 'bar', baz: 'bang'}

function updateObjectWithKeyAndValue(object, key, value){
  var newObject = Object.assign({}, object)
  newObject[key] = value
  return newObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({}, object)
  delete newObject[key]
  return newObject
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}