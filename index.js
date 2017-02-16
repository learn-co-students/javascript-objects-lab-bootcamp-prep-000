var recipes = {
flour: "two cupe",
water: "1 cupe",
}

function updateObjectWithKeyAndValue(obj, key, values) {
  return Object.assign({}, obj, { [key] : values})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, values) {
  obj[key] = values;
  return obj
}

function deleteFromObjectByKey(obj, key) {
  var newObj = Object.assign({}, obj);
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key]
  return obj
}