var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  recipes['key'] = 'value';
};

function updateObjectWithKeyAndValue(object, key, value){
  recipes['prop'] = '1',
  recipes['prop2'] = '2';
  return recipes
};

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj
};

function deleteFromObjectByKey(object, key) {
  var clone = Object.assign({}, object);
  delete clone[key];
  return object
};

function deleteFromObjectByKey(object, key){
var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj  
};

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key
  return recipes;
};


function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
};





