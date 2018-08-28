var recipes = {};

function updateObjectWithKeyAndValue(obj, key, val){
  return Object.assign({},obj,{[key]:val});
  
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val){
  obj[key] = val;
  return obj;
  
}

function deleteFromObjectByKey(obj,key){
  let retObj = Object.assign({},obj);
  delete retObj[key];
  return retObj;
  
}

function destructivelyDeleteFromObjectByKey(obj,key){delete obj[key]; return obj;}