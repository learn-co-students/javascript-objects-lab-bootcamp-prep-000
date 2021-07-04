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

var newObj = Object.assign({}, {key})
delete newObj[key]
return newObj

}

function destructivelyDeleteFromObjectByKey(object, key){

delete object[key]

return object

}
