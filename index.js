var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    object[key] = value
    return object
}

function deleteFromObjectByKey(object, key) {
    const copyObject = Object.assign({}, object)
    delete copyObject[key]
    return copyObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
    delete object[key]
    return object
}