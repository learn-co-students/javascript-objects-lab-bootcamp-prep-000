var recipes = {}

function updateObjectWithKeyAndValue(thing, key, value){
  var newThing = Object.assign({}, thing)
  Object.assign(newThing, {[key]: value})
  return newThing
}

function destructivelyUpdateObjectWithKeyAndValue(thing, key, value) {
  Object.assign(thing, {[key]: value})
  return thing
}

function deleteFromObjectByKey(thing, key) {
  var newThing = Object.assign({}, thing)
  delete newThing[key]
  return newThing
}

function destructivelyDeleteFromObjectByKey(thing,key){
  delete thing[key]
  return thing
}