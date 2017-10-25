var recipes = {};


function updateObjectWithKeyAndValue(object, key, value){
  var obj = { prop: 1 };
  return Object.assign({}, obj, {prop2: 2});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return obj;
  }

const obj = {prop: 1}

destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2)

function deleteFromObjectByKey(object, key){
var obj = { prop: 1 };
var newObj = Object.assign({}, obj);
newObj;
delete newObj.prop;
return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
