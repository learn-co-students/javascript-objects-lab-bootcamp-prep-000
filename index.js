var recipes = {};

function updateObjectWithKeyAndValue(o, k, v) {
    var newObj = Object.assign(o);
    newObj[k] = v;
    return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(o, k, v) {
    o[k] = v;
    return o;
}

function deleteFromObjectByKey(o, k, v) {
    var newObj = Object.assign(o);
    //delete newObj[k];
    return newObj;
}

function destructivelyDeleteFromObjectByKey(o, k) {
    delete o[k];
    return o;
}
