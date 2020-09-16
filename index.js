function updateObjectWithKeyAndValue(object, key, value){
    
  object = {
      prop: 1, prop2:2
  }
  key = "prop3"
  value = 3
  var obj ={key:value} 
  var newObj = Object.assign({},object, obj)
  return newObj
}

function updateObjectWithKeyAndValue(object, key, value){
    
  object = {
      prop: 1, prop2:2
  }
 
  var obj ={key:value} 
  var newObj = Object.assign(object, obj)
  return newRecipes
}

function updateObjectWithKeyAndValue(object, key, value){
   object = {
      prop: 1, prop2:2
  }
  object["prop2"] = 4
  
  var obj = {prop2:4}
  
  var newObj = Object.assign(object, obj)
  return newObj
}

function  destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  
 object = {
      prop: 1, prop2:2
  }
  object.key = "prop2"
  object["prop2"] = 3
  var newObj = Object.assign(object)
  
  return newObj
}

function  deleteFromObjectByKey(object, key)
 {
     object = {
      prop: 1, prop2:2
  }
 
   key = "prop2"
   var obj = {prop2:2}
   var newObj = Object.assign({}, obj)
   delete newObj.key
   
   return newObj
 }

function destructivelyDeleteFromObjectByKey(object, key){

   object = {
      prop: 1, prop2:2
    }
 
 var obj = {prop2:2}
  var newObj = Object.assign(obj)
  delete newObj.key
  return newObj
}









