var recipes =  {};

function updateObjectWithKeyAndValue(obj,key,value){
  
 return Object.assign( {},obj,{[key]: value});
  
  
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  
  return Object.assign(obj, {[key]: value });
}
function deleteFromObjectByKey(obj, key){
  
  delete key.obj;
  return key;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];

  return key;
}
