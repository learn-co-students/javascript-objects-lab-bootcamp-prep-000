var recipes= {foo: "bar"};
var updateObjectWithKeyAndValue = function(object, key, value){
  var myObj= Object.assign({}, object,{[key]: value});
  return myObj;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object,{[key]: value});
}
function deleteFromObjectByKey(object, key){
  var myCloneObj= Object.assign({}, object);
  delete myCloneObj[key];
  return myCloneObj;
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
