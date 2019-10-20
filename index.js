var recipes = {

};

function updateObjectWithKeyAndValue(object, key, value){
  var cloneObj = Object.assign({}, object,{[key]:value} );
  return cloneObj
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(object,key){
  var cloneObj = Object.assign({}, object,)
  delete cloneObj.key;
  return cloneObj;
}



function destructivelyDeleteFromObjectByKey(object,key){
  delete object.key;
  return object;
}
