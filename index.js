var recipes = {dinner: "chicken and rice"}


function updateObjectWithKeyAndValue(object, key, value){

return Object.assign({}, object, {[key]:value})

var newObject = Object.assign({}, object)

}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){

object[key] = value

return object

}


function deleteFromObjectByKey(object, key){

var object = {object: key}
var newObject = Object.assign({}, object, key)

delete newObject.object

return object


}

function destructivelyDeleteFromObjectByKey(object, key){

delete object[key]

return object
}
