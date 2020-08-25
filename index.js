// Object.assign creates a new object with given object and key/values
function updateObjectWithKeyAndValue(object, key, value) {
    let newKeyValue = {}
    newKeyValue[key] = value
    return Object.assign({}, object, newKeyValue)
}

function deleteFromObjectByKey(object, key) {
    const newObj = Object.assign({}, object)
    delete newObj[key]
    return newObj
}

// Bracket notation allows variables to be used as object keys
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    object[key] = value
    return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
    delete object[key]
    return object
}
