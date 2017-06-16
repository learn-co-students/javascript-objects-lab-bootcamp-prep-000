let recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromObjectByKey(obj, key) {
    let clone = Object.assign({}, obj);
    if(clone.hasOwnProperty(key))
        delete clone[key];
    return clone;
}


function destructivelyDeleteFromObjectByKey(obj, key) {
    if(obj.hasOwnProperty(key))
        delete obj[key];
    return obj;    
}
