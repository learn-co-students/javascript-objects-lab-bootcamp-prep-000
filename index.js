var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
recipes.prop = '1' ;
recipes.prop2 = '2';
return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
object[key] = 1
object[key] = 2
return object
}

function deleteFromObjectByKey(object, key){

var = obj = { key: '1'}

delete obj.key
return object
}

function destructivelyDeleteFromObjectByKey(object, key){

delete object[key]

return object

}
