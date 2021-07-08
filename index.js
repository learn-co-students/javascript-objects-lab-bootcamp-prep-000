
var recipes = { key : "value"};

function updateObjectWithKeyAndValue (object, key, value) {
var newObj = Object.assign({}, object );
newObj[key] = value;
return newObj;
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object,key) {
var obj = {object: 'key'};
var newObj = Object.assign({}, obj);
delete newObj.object;
return newObj;

}

function destructivelyDeleteFromObjectByKey(object, key) {
delete object[key];
return object;

}
