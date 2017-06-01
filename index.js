var recipes = new Object();
function updateObjectWithKeyAndValue(object, key, value) {object [key] = value; return object}
function destructivelyUpdateObjectWithKeyAndValue( object, key, value) {object [key] = value; return object}
function deleteFromObjectByKey(object, key, value){Object.assign({}, object, {[key]: value}); return object} 
function destructivelyDeleteFromObjectByKey(object, key, value) {object [key] = value; return object}