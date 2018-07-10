var recipes = ({});

var object = {prop: '1'}

function updateObjectWithKeyAndValue(object, key, value) {
   var newRecipes = Object.assign({},object);
    newRecipes['prop'] = '1'
     newRecipes['prop2'] = '2'
       return newRecipes
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object['prop2'] = '2';
  return object
}



function deleteFromObjectByKey(object, key) {
  var newRecipes = Object.assign({},object);
   delete newRecipes['prop'];
    return newRecipes
}


function destructivelyDeleteFromObjectByKey(object, prop) {
  delete object['prop'];
  return object
} 
