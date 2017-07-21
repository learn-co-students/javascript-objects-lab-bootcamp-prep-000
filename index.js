var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}

function deleteFromObjectByKey(object, key){
  var temp=Object.assign({}, object)
  delete temp.key
  return temp
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  object;
}
