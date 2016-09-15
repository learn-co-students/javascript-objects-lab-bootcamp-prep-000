
var recipes = {};

function updateObjectWithKeyAndValue(object,key,value){
  var newObj = Object.assign({},object, { [key]:value});
  return newObj; //  is not destructive. omg, i get it!^^
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]= value; // is destructive. i really get. sobs obects always confuse me.
  return object;      // never thought it matter how you did it. as long as you got the input.

}

function deleteFromObjectByKey(object, key){
   var newObj = Object.assign({},object);
   delete newObj.key;
   return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
     delete object.key;
     return object;
}
