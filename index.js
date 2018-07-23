var recipes = new Object({})

function updateObjectWithKeyAndValue(object, key, value){
return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
return Object.assign(object, {[key]: value})
}

function deleteFromObjectByKey(object, key){
var test = delete object.key
return test
}

function destructivelyDeleteFromObjectByKey(object, key){
delete object[key]
return object
}