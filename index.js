var recipes = {};

var updateObjectWithKeyAndValue = (obj, key, val) => Object.assign({}, obj, { [key]: val });

var destructivelyUpdateObjectWithKeyAndValue = (obj, key, val) => { obj[key] = val; return obj; };

var deleteFromObjectByKey = (obj, key) => { 
  var newObj = Object.assign({}, obj);
  delete newObj[key];
  return newObj;
};

var destructivelyDeleteFromObjectByKey = (obj, key) => { delete obj[key]; return obj; };