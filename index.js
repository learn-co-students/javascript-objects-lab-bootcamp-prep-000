var recipes = { };


//NEEDS WORK
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value}); 
  }


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
object[key]= value;
return object;

}

/////FIX THIS///////////
function deleteFromObjectByKey(object, key){
  let newObject= Object.assign({}, object);
  delete newObject[key];
  return newObject;
}

  
  
// Object.assign( delete object[key]);
//   return object;


function destructivelyDeleteFromObjectByKey(object, key){
 Object.assign( delete object[key]);
  return object;
}