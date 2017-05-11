var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value){
  // We pass everything into a new object, otherwise the
  // original object will be modified.
  // What you we're probably thinking of doing was
  // 'return Object.assign(object, {[key]: value})' which
  // will return a mutated object.
  //
  // Below is non-destructive and keeps the original as is
  // and returns a new object.
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key]: value})
}

function deleteFromObjectByKey(object, key){
  var tempObj = Object.assign({}, object)
  delete tempObj[key]
  return tempObj
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
