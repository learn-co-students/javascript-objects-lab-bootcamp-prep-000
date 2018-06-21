var recipes = {
    flour: "1 cup",
    water: "1 cup",
    milk: "1/2 cup",
    chocolate: "20 chips",
}

function updateObjectWithKeyAndValue(object, key, value) {
    object[key] = value
    return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    object[key] = value
    return object
}
function destructivelyDeleteFromObjectByKey(object, key) {
    delete object[key]
    return object
}

function updateObjectWithKeyAndValue(object, key, value) {
    return Object.assign ({}, object, {[key]: value})
}

function deleteFromObjectByKey(object, key) {
    var newObject = Object.assign({}, object)
    return newObject
}

function deleteFromObjectByKey(object, key) {
    var newObject = Object.assign({}, object)
    delete newObject[key]
    return newObject
}
