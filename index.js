const recipes = {};

function updateObjectWithKeyAndValue(anObject,key,value){
  var result=Object.assign({},anObject,{[key]:value});
  return result;}

function deleteFromObjectByKey(object,key){
  var result=Object.assign({},object);
  delete result[key];
  return result;}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
object[key]=value;return object;}

function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key];
  return object;}

var testObj={samp:0,samp2:1};
console.log(testObj);
console.log(updateObjectWithKeyAndValue(testObj,'samp3',2));
console.log(destructivelyUpdateObjectWithKeyAndValue(testObj,'samp4',3));