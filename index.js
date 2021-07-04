var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {

  var newObj = {}

  Object.assign(newObj, obj, {[key]:value})

  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue (obj, key, value) {

  obj[key]=value

  return obj
}

function deleteFromObjectByKey(obj, key) {

  var cObj = {}

  Object.assign(cObj, obj)

  delete cObj[key]

  return cObj
}

function destructivelyDeleteFromObjectByKey (obj, key) {

  delete obj[key]

  return obj
}
