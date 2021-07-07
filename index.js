const recipes = {};

const updateObjectWithKeyAndValue = function(object, key, value){
  var newObj = Object.assign({}, object);
  newObj[key] = value;
  return newObj;
  
};



const destructivelyUpdateObjectWithKeyAndValue = function(object, key, value){
  object[key] = value;
  return object;
};


const deleteFromObjectByKey = function(object, key){
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
};


const destructivelyDeleteFromObjectByKey = function(object,key){
  delete object[key];
  return object;
};