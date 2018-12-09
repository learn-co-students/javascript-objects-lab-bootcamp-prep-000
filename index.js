var recipes = {'cake': 'eggs'}

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, object)
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}