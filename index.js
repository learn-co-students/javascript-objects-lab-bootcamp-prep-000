var recipes = {};

function updateObjectWithKeyAndValue (object, key, value) {
Object.key = value;
return Object
}

function updateObjectWithKeyAndValue (object, key, value) {
Object.key = value;
return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
object[key] = value;
return object
}

function deleteFromObjectByKey (object, key, value){
object[key] = value;
return object
}

function deleteFromObjectByKey(object, key) {
var clone = Object.assign({}, object);
delete clone[key];
return clone;
}
function destructivelyDeleteFromObjectByKey(object, key) {
delete object[key];
return object;
}
