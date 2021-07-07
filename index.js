var recipes = {  }


function updateObjectWithKeyAndValue(object, key, value) {
  var new_obj = {};
  for (var keys in object) {
    var val = object[keys];
    new_obj[keys] = val;
  }
  new_obj[key] = value;
  return new_obj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var new_obj = {};
  for (var keys in object) {
    var val = object[keys];
    if (keys !== key) {
      new_obj[keys] = val;
    }
  }
  return new_obj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}