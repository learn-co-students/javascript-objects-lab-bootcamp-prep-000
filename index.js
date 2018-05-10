var recipes = {eggs: 2, flour: "2 cups", sugar: "1 cup", milk: "1/2 cup", chocolate: "2/3 cup"};

function updateObjectWithKeyAndValue (object, key, value){
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue (obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(object, key) {
  var alternateObj = Object.assign({}, object);
  delete alternateObj[key];
  return alternateObj;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}
