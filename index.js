var recipes= {};

/*function updateObjectWithKeyAndValue(object,key,value){
return Object.assign({}, object,{key:[value]})
  
}*/
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(object, key,value){
  object[key]=value;
  return object;
}

function deleteFromObjectByKey(object,key){
var obj={object: key};
var newObj=Object.assign({}, obj);
newObj;
delete newObj.key;
newObj;
return obj;

}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}