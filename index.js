var recipes = {
    crepe: ['milk', 'flower', 'eggs'],
    fruit: 'kiwi'
};

function updateObjectWithKeyAndValue(object, key, value) {
    //returns clone of object by adding key & value
    //non-destructive
    return Object.assign({}, object, {[key]: value});
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    //updates object with the given key and value
    //destructive
    object[key] = value;
    return object;
}
function deleteFromObjectByKey(object, key) {   
    //deletes key from a clone of object and returns the new object
    //non-destructive
    return Object.assign({}, object, key);
}
function destructivelyDeleteFromObjectByKey(object, key) {
    //deletes the key from object and returns object
    //destructive
    delete object[key];
    return object;
}