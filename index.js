var recipes = {};

function updateObjectWithKeyAndValue (object, key, value) {
  var obj = {prop: 1}
   return Object.assign({}, object, { [key]: value})

}

function destructivelyUpdateObjectWithKeyAndValue ( object, key, value) {
  object[key] = value

    return object
}

function deleteFromObjectByKey(object, key) {
  var obj = {prop: 1}

  var newObj = Object.assign({}, obj)

    delete newObj[key]

      return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {

  delete object[key]

    return object
}
