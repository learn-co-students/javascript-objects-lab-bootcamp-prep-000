var recipes= {}; //not sure if what was asked for but this empty object seems to work

//returns a clone object with the orignal key value pairs and the new key value pairs
//but can't this only add one key-pair at a time?
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]:value })
}

// not making the target a blank makes the process destructive
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object,{[key]:value }) 
}

// nondestruction deletion, creating a new object
function deleteFromObjectByKey(object, key){
  var newObj= Object.assign({},object);
 return delete newObj[key];
}

function destructivelyDeleteFromObjectByKey(object, key){
 return delete object[key];
}
 
