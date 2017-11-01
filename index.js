var recipes = {key: "value"}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},recipes,{ prop: '1', prop2: '2' })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    object[key] = value
    return object
  }

function deleteFromObjectByKey(object, key) {
  var clone = Object.assign({},object,{key})
  delete clone[key]
  return clone
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
