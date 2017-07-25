var recipes = {
  eggs: 3,
 flour : "7 cups" ,
 onions : "2 pounds"
 }

 function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
   obj[key] = value

   return obj
 }
 function updateObjectWithKeyAndValue(obj, key, value) {

   return Object.assign({}, obj, { [key]: value })
 }
 function destructivelyDeleteFromObjectByKey(obj,key){
 delete obj[key]
 return obj
 }

function deleteFromObjectByKey (object,key) {
var newObj=Object.assign ({}, object)
  delete newObj[key]
  return newObj
}
