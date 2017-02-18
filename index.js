var recipes = {}

function updateObjectWithKeyAndValue(recipes, key, value) {
    var newObj = Object.assign({}, recipes)
    newObj[key] = value
    return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    object[key] = value
    return object
}

function deleteFromObjectByKey(recipes, key) {
    var newObj = Object.assign({}, recipes)
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
    delete recipes[key]
    return recipes
}
