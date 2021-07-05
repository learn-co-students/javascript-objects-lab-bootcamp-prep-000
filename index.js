var recipes = { bread: 'wheat', cheese: 'cheddar'}


function updateObjectWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, { prop2: 2} )
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object.prop2 = 2;
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  delete newObj.prop;
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.prop
  return object
}