var recipes = {
  bread: 2,
  milk: 'one gallon',
  eggs: 2,
  cinnamon: '1 tablespoon'
}

function updateObjectWithKeyAndValue(object01, key, value) { // PASS
  return Object.assign({recipes}, object01, {[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object01, key, value) {//PASS
  object01[key] = value
  return object01
}

function deleteFromObjectByKey(object01, key) { //PASS
  var a = Object.assign({}, object01)
  delete a[key]
  return a
}

function destructivelyDeleteFromObjectByKey(object01, key) {
  delete object01[key]
  return object01
}
