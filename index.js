var recipes = {object: "value", } 

function updateObjectWithKeyAndValue( recipes, object,value)
{

recipes[object]=value
return recipes
  
}

function updateObjectWithKeyAndValue(recipes, object,value)
{
  
return Object.assign ({}, recipes,{ [object]:value}  )
 
 } 
 
 function destructivelyUpdateObjectWithKeyAndValue(recipes,object,value)
 {
   recipes[object]=value
   return recipes
   
 }
 
 function deleteFromObjectByKey(newrecipes,object2)
 {
   var newrecipes= {object2:'(Object.assign({},newrecipes)'}
  
  delete newrecipes[object2]
  return newrecipes
  
 }
 
 function destructivelyDeleteFromObjectByKey(recipes,object)
  { 
   delete recipes[object]
   return recipes
  } 
 