
//test #1
var recipes = {};



//test #2


const updateObjectWithKeyAndValue = (object, key, value) => {
  //return object;
  var copy = Object.assign({},object);
  copy[key] = value;
  return copy;
};


//test #3

const destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  object[key] = value;
  return object
};

//test 4


const deleteFromObjectByKey = (object, key) => {
  let clone = Object.assign({},object);
  delete clone[key];
  return clone;
};


//test 5


const destructivelyDeleteFromObjectByKey = (object, key) => {
  delete object[key];
  return object;
};
