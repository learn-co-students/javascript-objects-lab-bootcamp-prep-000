var recipes = new Object()

function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, prop2, value){
  obj.prop2 = value;
  return obj;
}


function deleteFromObjectByKey(obj, key){
  var obj = new Object()
  var newObj = Object.assign({}, obj)
  return obj
}

function destructivelyDeleteFromObjectByKey(obj, prop){
  return delete obj.prop;
}
