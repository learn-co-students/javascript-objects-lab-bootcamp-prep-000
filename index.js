var recipes = {1: 'first recp.', 2: 'second recp.'}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
    object[key] = value
    return object
}

function deleteFromObjectByKey(object, key){
    var newObj = Object.assign({}, object);
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromObjectByKey(object, key){
    delete object[key]
    return object
}
