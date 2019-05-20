var recipes ={ingredient1:"cream cheese", ingredient2:"sugar", ingredient3:"eggs", ingredient4:"butter"};
function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({}, object, { [key]: value });
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
object[key]=value
return object
}


function deleteFromObjectByKey(object,key) {
return Object.assign({}, object, delete object.key)
  }

  function destructivelyDeleteFromObjectByKey(object, key) {
    delete object[key]
    return object;
  }