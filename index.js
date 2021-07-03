var recipes = {};

function updateObjectWithKeyAndValue (obj, key, val) {
  return Object.assign({}, obj, {[key]: val})
};

function destructivelyUpdateObjectWithKeyAndValue (obj, key, val) {
  obj[key] = val
  return obj
}

function deleteFromObjectByKey (obj, key) {
  var temp = Object.assign({}, obj)
  delete temp[key]
  return temp
}

function destructivelyDeleteFromObjectByKey (o, k) {
delete o[k]
return o
}
