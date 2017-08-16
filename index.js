
var recipes =new Object();

function updateObjectWithKeyAndValue(object, prop2, value){
 return Object.assign({},object,{prop2:value});
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var objectnew =  delete object.key;
  return objectnew;
}

function destructivelyDeleteFromObjectByKey(object, key){
    delete object[key];
    return object;

}
