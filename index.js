var recipes = {
}

var updateObjectWithKeyAndValue = function(object, key, value){
  return Object.assign({},object,{[key]:value});
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value){
  object[key]=value;
  return object;
}

var deleteFromObjectByKey = function(object,key,value){
  var object1= Object.assign({}, object, {[key]:value});
  delete object1[key];
  return object1
}

var destructivelyDeleteFromObjectByKey = function(object,key){
  delete object[key];
  return object;
}
