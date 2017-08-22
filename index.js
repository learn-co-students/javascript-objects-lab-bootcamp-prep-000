var recipes={}

function updateObjectWithKeyAndValue(){
var object={prop:1, prop2: 2}
return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
object[key]=value
return object
}

function deleteFromObjectByKey (object, key){
Object.assign({}, object)
  delete object.key
}
