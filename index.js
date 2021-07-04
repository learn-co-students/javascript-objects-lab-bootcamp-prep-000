var recipes = new Object({
  mood: 'fuckit',
  motivation: 'zero',
  energy: 'none',
  cost: 'seamlesscharge'
})

function updateObjectWithKeyAndValue(object, key, value) {
return Object.assign({},object, {[key] : value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
object[key] = value
return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
return delete object[key]
}

function deleteFromObjectByKey(object, key) {
var newobject = Object.assign({}, object)
delete newobject[key]
return newobject
}
