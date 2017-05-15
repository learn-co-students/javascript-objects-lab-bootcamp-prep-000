var recipes = {

}

function updateObjectWithKeyAndValue(object,key,value) {
  return Object.assign({}, object,{[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
    object[key] = value;
    return object;
}

function deleteFromObjectByKey(object, key) {
  var object = { key: 'bar' };

  var newObj = Object.assign({}, object);

  newObj;

  delete newObj.key;

  newObj;

  return object;
}

function destructivelyDeleteFromObjectByKey(object,key) {
  var object = { key: 'bar' };

  delete object.key;

  return object;
}
