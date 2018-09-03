var recipes = {};


function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value })
}


function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  
  return Object.assign(obj, {[key] : value})
}


function deleteFromObjectByKey(obj, key){
  
  var newobj = Object.assign({}, obj);
  delete newobj[key];
  return newobj;
}


function destructivelyDeleteFromObjectByKey(object, key){
  
  delete object[key]
  return object
}



  
  
