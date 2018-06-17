var recipes = {
chocolate: '1 cup',
eggs: '2',
water: '3 cups'}

function updateObjectWithKeyAndValue(obj, key, value) {

  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value

  return obj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
return object
}

function deleteFromObjectByKey(object, key) {
  var object2 = delete object.key
  return object2
}
