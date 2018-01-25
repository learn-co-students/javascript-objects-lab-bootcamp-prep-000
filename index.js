var recipes = {flour:"2 cups",eggs:3, milk:"1 cup"}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object,{[key]:value});
}
updateObjectWithKeyAndValue(recipes, "sugar","2 tbs")

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}
destructivelyUpdateObjectWithKeyAndValue(recipes, "oil", "2 tsp");

function deleteFromObjectByKey (object, key){
  return delete object.key;
  
}
deleteFromObjectByKey(recipes,"flour");

function destructivelyDeleteFromObjectByKey(object,key){
    delete object[key];
    return object
    
}

destructivelyDeleteFromObjectByKey(recipes,"eggs");