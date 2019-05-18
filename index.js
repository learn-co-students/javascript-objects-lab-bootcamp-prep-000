var recipes = new Object()
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
    }

var obj = {}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key]=value
  return obj
}

    function deleteFromObjectByKey(object, key) {
    var newObj = Object.assign({}, object)
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var newObj = Object.assign(object)
  delete newObj[key]
  return newObj
}
