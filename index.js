var recipes = {};

var obj = { prop: 1 }

var updateObjectWithKeyAndValue = function (object, key, value ) {
  return Object.assign({}, obj, { [key]: value })
}

//THIS ONE NEEDS HELP!
 function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  obj[key] = value;
  return obj;

}

var deleteFromObjectByKey = function(object, key) {
  var newObj = Object.assign({}, obj);
  delete newObj[key];
  return newObj;
}

var destructivelyDeleteFromObjectByKey = function(object, key) {
  delete obj[key];
  return obj;
}
