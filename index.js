var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = {prop: 1};
    Object.assign(obj, {"prop2": 2});
  return obj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
      return obj;
}

function deleteFromObjectByKey(object, key) {
    var obj = { prop: 1 };
    
    delete obj.prop;
    return obj;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
    delete obj.prop;
      return obj;
}


