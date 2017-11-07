var recipes = new Object({ingredient: 'amount'})

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = {prop: 1}
  var obj2 = {prop2: 2}
    return Object.assign({}, obj, obj2, 2)
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
    return object
}

function deleteFromObjectByKey(object, key) {
  var obj = { prop: 1 }
  var newObj = delete obj[key]
      return obj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var obj = {prop:1}
  var newObj = delete obj[key]
    delete object[key]
      return newObj
}
