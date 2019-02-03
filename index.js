var recipes = {
  egg: '3',
  flour: '4 cups'
}

function updateObjectWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  delete object.key
}

function deleteFromObjectByKey(object, key){
  var newOj = Object.assign({}, object)
  delete newOj[key]
  return newOj
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}