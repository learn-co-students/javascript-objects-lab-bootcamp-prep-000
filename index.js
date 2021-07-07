var recipes = Object.assign ({});

function updateObjectWithKeyAndValue(object, key, value) {
 const target = object;
 const source = { [key]: value };
 const returnedTarget = Object.assign({}, target, source);
 return returnedTarget;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 object[key] = value;
 return object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
      delete object[key];
  return object;
}

