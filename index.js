var obj = { prop: 1 }


function updateObjectWithKeyAndValue(obj, key, value) {

  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
obj[key] = value
  return obj
}

destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2)


function deleteFromObjectByKey(obj, key){
  return Object.assign({}, key)
  delete obj.key;
return obj
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
