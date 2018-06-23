var recipes = {};

function updateObjectWithKeyAndValue(object,key,value) {
  return Object.assign({},object,{[key]:value});
}


function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key] = value;
  return object;
}  

function deleteFromObjectByKey(object,key) {
  var obj={corn:'2 cups'};
  var newObj=Object.assign({},obj);
  delete newObj.corn;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object,key) {
  var food = {fajita:'2 plates',chicken:3};
  return delete food.chicken
}

function destructivelyDeleteFromObjectByKey(object,key) {
  delete object[key];
  return object;
}