var recipes = {};

function updateObjectWithKeyAndValue(object,key,value){
  var newObj = Object.assign({},object);
   newObj[key]=value;
   return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key]=value;
  return object;
}

function deleteFromObjectByKey(object, key){
 
 var bo = delete object.key;
  return bo;
}



function destructivelyDeleteFromObjectByKey(object,key){
//delete object.key;
 return Object.assign({},delete object[key]);
}

