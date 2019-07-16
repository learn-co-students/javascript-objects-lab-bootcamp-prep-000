let recipes ={};
function updateObjectWithKeyAndValue(object, key, value){
 
  return Object.assign({},object, {[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
  return object
}

function deleteFromObjectByKey(object, key){
  var answer = Object.assign({},object);
  delete answer[key]
  return answer
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object
}