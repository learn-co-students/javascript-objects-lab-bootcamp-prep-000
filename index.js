var recipes = {}

var updateObjectWithKeyAndValue = function(object, key, value) {
    var temp = Object.assign(object, {[key] : value})
    return temp
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value) {
    object[key] = value;
    return object
}

var deleteFromObjectByKey = function(object, key) {
    var temp = Object.assign({}, object);
    delete temp[key];
    return temp
}

var destructivelyDeleteFromObjectByKey = function(object, key, value) {
    delete object[key];
    return object
}
