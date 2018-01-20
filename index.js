var recipes = {};


function updateObjectWithKeyAndValue(obj, key, value){
  var obj2 = Object.assign({}, obj);
  obj2[key] = value;
  return obj2;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key]= value;
  return obj;
}

function deleteFromObjectByKey(obj, key){
  var obj2 = Object.assign({}, obj);
  delete obj2[key];
  return obj2;
}


function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key];
  return obj;
}



