var recipes = {
    dressing: 'blue cheese',
    lettuce: 'romaine',
    croutons: true
};

function updateObjectWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
};

function updateObjectWithKeyAndValue(obj, key, value) {
    var newObj = Object.assign({}, obj);
    newObj[key] = value;
    return newObj;
};

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
};

function destructivelyDeleteFromObjectByKey(obj, key) {
    var newObj = Object.assign({}, obj);
    delete newObj[key];
    return newObj;
};

function deleteFromObjectByKey(obj, key) {
    var newObj = Object.assign({}, obj);
    delete newObj[key];
    return newObj;
};

function destructivelyDeleteFromObjectByKey(obj, key) {
    delete obj[key];
    return obj;
};
