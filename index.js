var recipes = {prop: 1};

function updateObjectWithKeyAndValue(object,key,value){
var newObj = Object.assign({},object);
newObj[key]=value;
return newObj;
return recipes;
}



function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
      return Object.assign(object,object[key]=value);
}



function deleteFromObjectByKey(object, key){
   var newObj = Object.assign({},object);
   delete newObj[key];
   return newObj;
}



 function destructivelyDeleteFromObjectByKey(object, key){
   delete object[key];
   return object;
 }

