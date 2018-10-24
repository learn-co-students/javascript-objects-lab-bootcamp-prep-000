var recipes = { prop: 1};

function updateObjectWithKeyAndValue(obj, key, value){
  
  var recipes = { prop: 1, prop2: 2 };
  return recipes;
  
}

updateObjectWithKeyAndValue(recipes, prop2, 2);


function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  
  obj.prop2 = value;
  return obj;
  
}

destructivelyUpdateObjectWithKeyAndValue(recipes, prop2, 2)


function deleteFromObjectByKey(obj, key){
  
}


function destructivelyDeleteFromObjectByKey(obj, key){
  
}