
// updating non destructive
function updateObjectWithKeyAndValue(object, key, value){
return Object.assign({}, object, {[key]: value});
}

const recipes ={ eggs: 3};

updateObjectWithKeyAndValue(recipes, 'chocolate', '1 cup');

// updating destructively
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
 object [key] = value
 return object
  
}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'flour', '2 cups')

// deleting non destructively 
function deleteFromObjectByKey(object, key){
var newObj = Object.assign({}, object)
delete newObj[key]; 
return object;
}
// deleting destructively
function destructivelyDeleteFromObjectByKey(object, key){
delete object[key]; 
return object; 

}






  
