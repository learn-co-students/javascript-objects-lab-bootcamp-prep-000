var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = {};
  var newObj = Object.assign(newObj, object);
  
  newObj[key]=value;
 
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  // object = Object.assign({}, {key: value});
 object[key] = value;
 
 
  return object;
  
  
  // var myDataName = 'height';
  //     var myDataValue = '1.75m';
  //     person[myDataName] = myDataValue;
  
}

function deleteFromObjectByKey(object, key) {
  var newObj = {};
  newObj = Object.assign({}, object);
delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}

