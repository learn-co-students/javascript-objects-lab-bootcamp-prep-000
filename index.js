var recipes = {
  
};


function updateObjectWithKeyAndValue (obj, key, value) {
  
  
  return Object.assign( {}, obj, { [key]: value}   );
  
}

function destructivelyUpdateObjectWithKeyAndValue (obj, key, value) {
  
  obj[key] = value;
  
  return obj;
  
}


function deleteFromObjectByKey (obj, key) {
  
  var newObj = Object.assign ( {}, obj );
  
  return delete newObj.key;
  
}

function destructivelyDeleteFromObjectByKey (obj, key) {
  
  return delete obj[key];
  
}







