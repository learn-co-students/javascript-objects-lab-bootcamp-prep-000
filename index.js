var recipes = {
  ingredient1: "bread",
  ingredient2: "cheese",
  ingredient3: "tomato"
}


function updateObjectWithKeyAndValue (object, key, value) {
 return Object.assign ({}, object, {[key]: value})
}

function deleteFromObjectByKey (object, key) {
var newObj = Object.assign ({}, object)
newObj
delete newObj[key]
return newObj
}

function destructivelyDeleteFromObjectByKey  (object, key) {
delete object[key]
return object
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  delete object[key]
  object[key] = value
  return object
}
