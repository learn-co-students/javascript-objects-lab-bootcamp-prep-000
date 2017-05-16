var recipes = {
  foo: 'bar',
}

function updateObjectWithKeyAndValue(object, key, value){
  var obj = { prop: 1 }
  return Object.assign({}, {[key]: value}, object)
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var obj = { prop: 1 }
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var obj = { prop: 1 }
  return Object.assign({}, object)
}

function destructivelyDeleteFromObjectByKey(object, key){
  var obj = { prop: 1 }
  delete object[key]
  return object
}
