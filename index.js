var recipes = {
  cake: 'flour',
  candy: 'sugar',
  nugget: 'chicken'
};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value})
}

function deleteFromObjectByKey(object, key){
  delete object.key
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key
  return object
}
