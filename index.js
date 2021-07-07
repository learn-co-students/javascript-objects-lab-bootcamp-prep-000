var recipes={cake:['flour','sugar', 'butter'],
            smoothie:['milk','banana','sugar']};
var key="Taco"
var value=['tacoshells','beans'];
            
function updateObjectWithKeyAndValue(recipes, key, value){
  var newObj=object.assign({},recipes,{[key]:value});
  return newObj;
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key]=value;
  return recipes;
}

function deleteFromObjectByKey(recipes, key){
  var newObj=Object.assign({},recipes);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(recipes, key){
  delete recipes[key];
  return recipes;
}


function updateObjectWithKeyAndValue(recipes, key, value){
   var newObj=Object.assign({},recipes,{[key]:value});
   return newObj;
}
