var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {return Object.assign({}, object, {[key]: value})};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {object[key] = value
return object};

function deleteFromObjectByKey(object, key) {delete object.prop2
return object};

function destructivelyDeleteFromObjectByKey(object, key) {delete object.prop
return object};
