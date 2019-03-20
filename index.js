var recipes = {};

var updateObjectWithKeyAndValue = (object, key, value) => 
  Object.assign({}, object, {[key]:value});
var destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => { object[key]=value; return object; };

var deleteFromObjectByKey = (object, key) => {
  var newObject=Object.assign({},object);
  delete newObject[key];
  return newObject;
};
var destructivelyDeleteFromObjectByKey = (object, key) => 
  delete object[key];
