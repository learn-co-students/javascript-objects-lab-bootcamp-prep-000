function updateObjectWithKeyAndValue(object, key, value) {
    let newKeyValue = {}
    newKeyValue[key] = value
    return Object.assign({}, object, newKeyValue)
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    object[key] = value
    return object
}

function deleteFromObjectByKey(object, key) {
    const newObj = Object.assign({}, object)
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
    delete object[key]
    return object
}
