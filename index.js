var recipes={};
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var clone = Object.assign({}, object);
  delete clone[key];
  return clone;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}





//var obj = { prop: 1 };
//function updateObjectWithKeyAndValue(object, key, value){
//object[obj],{'prop2':"2"}}

//function updateObjectWithKeyAndValue(object,key,value){
 
// object.assign({},[obj],{'prop2':"2"})}
//(updateObjectWithKeyAndValue(obj, 'prop2', 2)

