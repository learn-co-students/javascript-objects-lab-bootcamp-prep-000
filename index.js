var recipes ={};

var updateObjectWithKeyAndValue=function(object,key,value){
  var clone = Object.assign({},object,{[key]:value});
  return clone;
};

var destructivelyUpdateObjectWithKeyAndValue=function(object,key,value){
  object[key]=value;
  return object;
};

var deleteFromObjectByKey=function(object,key){
  var clone = Object.assign({},object);
  delete clone[key];
  return clone;
}

var destructivelyDeleteFromObjectByKey=function(object,key){
  delete object[key];
  return object;
}