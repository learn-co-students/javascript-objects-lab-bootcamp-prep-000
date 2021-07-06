var recipes = {prop: 1}

function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {prop2:2})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = "prop2";
  obj.prop2 = 2 
  return obj
}

function deleteFromObjectByKey(obj, key){
  var newObj = delete obj.key 
  return newObj
}

function destructivelyDeleteFromObjectByKey(obj, key){
  return delete obj[key];
}

