var recipes = new Object ({water: '1'});

// update 

function updateObjectWithKeyAndValue(object, key, value) {
   return Object.assign({}, object, {[key]: value});

 }

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value; // this is working by change to [].
  return object;
}

// non-destructive delete

// function deleteFromObjectByKey(object, key) {
//   delete object.key;
//   return object;
// }

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, {object:key}); // Object need to be upper case
  delete newObj.key;
  return newObj;
}

// destructive delete

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];   //this worked by change from . notatiaon to []. 
  return object;
  
}