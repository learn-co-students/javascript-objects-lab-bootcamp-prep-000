

var recipes = {prop: 1};

function updateObjectWithKeyAndValue(object,key,value){
  var newObj = Object.assign({},object);
  newObj[key]=value;
  console.log(newObj);
  console.log(recipes);
}

 updateObjectWithKeyAndValue(recipes,'prop2',2);

 function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
   return Object.assign(object,object[key]=value);
 }

destructivelyUpdateObjectWithKeyAndValue(recipes,'prop2',2);

 function deleteFromObjectByKey(object, key){
   var newObj = Object.assign({},object);
delete newObj[key];
   return newObj;
}

deleteFromObjectByKey(recipes,'prop');

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}

destructivelyDeleteFromObjectByKey(recipes,'prop');
