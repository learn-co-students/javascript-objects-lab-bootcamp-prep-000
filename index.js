  var recipes = {
    prop: 1
  }

//First Function
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

//Second Function
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

//Third Function
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}


//Fourth Function
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}
