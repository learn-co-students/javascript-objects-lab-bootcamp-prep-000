/*---------------------------
  FUNCTIONS
-----------------------------*/
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key]=value;
  return obj;
}

function updateObjectWithKeyAndValue(obj, key, value){
  var newObj = Object.assign({}, obj);
//  var oldKey oldValue;

//  if (obj[key]){
//    oldKey = key;
//    oldValue = value;
//    delete obj[key];
//  }
  newObj[key]=value;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key];
  return obj;
}
function deleteFromObjectByKey(obj, key){
  var newObj = Object.assign({}, obj);
  delete newObj[key];
  return newObj;
}

/*---------------------------
  PROCESS
-----------------------------*/
var recipes = {};

recipes['cookie']="a bit of this and that";
recipes['cake']="more of that";

console.log(JSON.stringify(destructivelyUpdateObjectWithKeyAndValue(recipes,'pie',"much more of that")));
console.log(JSON.stringify(updateObjectWithKeyAndValue(recipes,'tart',"more of this, less of that")));
console.log(JSON.stringify(recipes));
console.log(JSON.stringify(deleteFromObjectByKey(recipes,'pie')));
console.log(JSON.stringify(recipes));
console.log(JSON.stringify(destructivelyDeleteFromObjectByKey(recipes,'pie')));
console.log(JSON.stringify(recipes));
