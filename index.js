var recipes = new Object();

var obj = {prop: 1};

function updateObjectWithKeyAndValue(object, key, value) {return Object.assign({},obj, {[key]: value})};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {obj[key] = value
return obj}

destructivelyUpdateObjectWithKeyAndValue(obj, "prop2", "2");

function deleteFromObjectByKey(object, key) {delete obj.prop
return obj};

function destructivelyDeleteFromObjectByKey(object, key) {delete obj.prop
return obj};
