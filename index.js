var recipes={}

function updateObjectWithKeyAndValue(){
var object={prop:1, prop2: 2}
return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
object.assign({key}, value)
return object
}
