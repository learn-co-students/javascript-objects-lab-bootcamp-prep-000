var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value})

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value

  return object
}

function deleteFromObjectByKey(object,key) {
  const new0bj = Object.assign({},object)

  delete new0bj[key]

  return new0bj
}

function destructivelyDeleteFromObjectByKey (object,key) {
  delete object[key]

  return object
}
