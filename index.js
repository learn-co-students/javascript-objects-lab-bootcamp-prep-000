var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, object);
  newObject[key] = value;
  return newObject;
}
  var recipes = {eggs: 3};
 updateObjectWithKeyAndValue(recipes, 'Ginger Bread', '2 cup');

 function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
    object = {[key]: value};
          return object;
    }
    var recipes = {eggs: 3};
    destructivelyUpdateObjectWithKeyAndValue(recipes, 'Ginger Bread', '2 cup');


function deleteFromObjectByKey(object, key){
     var newObj = Object.assign({}, object);
     delete newobj.key;
     return object;
}
var object = {foo: "bar"};
deleteFromObjectByKey(foo,"bar");

function destructivelyDeleteFromObjectByKey(object, key){
    var object  = object.key;
    delete object.key;
   return object;
}
 destructivelyDeleteFromObjectByKey(foo,"bar");


 function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
    object = {[key]: value};
          return object;
    }
    var recipes = {eggs: 3};
    destructivelyUpdateObjectWithKeyAndValue(recipes, 'Ginger Bread', '2 cup');


function deleteFromObjectByKey(object, key){
     var newObj = Object.assign({}, object);
     delete newobj.key;
     return object;
}
var object = {foo: "bar"};
deleteFromObjectByKey(foo,"bar");

function destructivelyDeleteFromObjectByKey(object, key){
    var object  = object.key;
    delete object.key;
   return object;
}
 destructivelyDeleteFromObjectByKey(foo,"bar");
