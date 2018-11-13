var recipes = { quiche: 'eggs' }
var updateObjectWithKeyAndValue = Object.assign({}, recipes)
updateObjectWithKeyAndValue
console.log(updateObjectWithKeyAndValue);
delete updateObjectWithKeyAndValue.quiche ;
updateObjectWithKeyAndValue;
 console.log(updateObjectWithKeyAndValue);
recipes;
console.log(recipes);
