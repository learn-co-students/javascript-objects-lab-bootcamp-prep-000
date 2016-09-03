var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
    obj = Object.assign({}, obj, { [key]: value});

    return obj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj;
}

function deleteFromObjectByKey(obj, key) {
    var obj = Object.assign({}, obj);
    delete obj.key;
    return obj;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
    delete obj[key];

    return obj;
}
