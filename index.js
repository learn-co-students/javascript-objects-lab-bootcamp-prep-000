var recipes=new Object();

function updateObjectWithKeyAndValue(recipes,key,value){
 return Object.assign({}, recipes, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key]=value;
  
  return object;
}

function deleteFromObjectByKey(object,key){
  
  var recipes=Object.assign({},object);
  delete recipes[key];
  return recipes;
}

function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key];
  return object;
}