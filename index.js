var recipes = {};

function updateObjectWithKeyAndValue(obj,key,val){
   var obj2 = obj;
   obj2[key] =val;
   return obj2;
}


function destructivelyUpdateObjectWithKeyAndValue(obj,key,val){

  obj[key] =val;
  return obj;
}


function deleteFromObjectByKey(obj,key){
    var obj2 = obj;
    return obj2;
}


function destructivelyDeleteFromObjectByKey(obj,key){

    delete obj[key];
    return obj;
}
