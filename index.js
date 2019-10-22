var recipes = {};

function updateObjectWithKeyAndValue(object, keyName, val) {
    return Object.assign({}, object, {[keyName]: val});
}

function destructivelyUpdateObjectWithKeyAndValue(object, k, val) {
    object[k] = val;
    return object;
}

function deleteFromObjectByKey(object, k) {
    var newObj = Object.assign({}, object);
    delete newObj[k];
    return newObj;
}

function destructivelyDeleteFromObjectByKey(object, k) {
    delete object[k];
    return object;
}
