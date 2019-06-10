var recipes= {}
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] =value
  return object
}

function deleteFromObjectByKey(object, key){ 
 
  // delete object.prop;

  return  Object.assign({}, {key: 'prop'});
}



function destructivelyDeleteFromObjectByKey(object, key){
  delete object.prop;
  return object
}
  