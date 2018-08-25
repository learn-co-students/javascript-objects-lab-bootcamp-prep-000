var recipes = {};

function updateObjectWithKeyAndValue(rcp,name,method){
  return Object.assign({},rcp,{[name]:method});
}
  
function destructivelyUpdateObjectWithKeyAndValue(rcp,name,method){
  rcp[name] = method;
  return rcp;
}  
  
function deleteFromObjectByKey(rcp, name) {
  var rcp2 = Object.assign({},rcp,name);
  delete rcp2[name];
  return rcp2;
}

function destructivelyDeleteFromObjectByKey(rcp, name){
  delete rcp[name];
  return rcp;
}

