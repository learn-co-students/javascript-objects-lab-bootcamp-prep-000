var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}


function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign({},object,{[key]:value});
 
  }
  
  function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
  }
  
function deleteFromObjectByKey(object,key) {
 var new_obj = Object.assign({},Object);
  delete new_obj.key
  return object 
}

var food = new_value
function deleteFromObjectByKey(object,key) {
 return Object.assign({},object,{[key]:food})
  
}
 
function destructivelyDeleteFromObjectByKey(object, key) {
 delete object[key]
 return object
  
}

  


 
 
