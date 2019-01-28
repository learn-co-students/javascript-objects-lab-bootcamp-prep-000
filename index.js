var recipes = {'prop': '1', 'prop2': '2'};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value } )
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object['prop2'] = '2';
  return object;
}

function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({}, delete object.key)
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key){
  // returns object without the delete key/value pair
  // modifies the original object
  delete object.prop
  return object;
}