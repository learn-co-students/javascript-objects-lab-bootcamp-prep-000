
var recipes = {};

function updateObjectWithKeyAndValue(object,key,value){

          return Object.assign({}, object, {[key]:value});

}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){

    object[key] = value;
    return object;
}

function destructivelyDeleteFromObjectByKey(object,key){
  var object = Object.assign({},object);
  delete object.key;
  return object;
}

function deleteFromObjectByKey(object,key){
  delete object.key;
    return object;
}
