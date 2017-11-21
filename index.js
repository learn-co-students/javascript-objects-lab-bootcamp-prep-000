var recipes = {};

function updateObjectWithKeyAndValue(obj,key,value){
  obj = {[key]:value};
  recipes = Object.assign(recipes,obj);
  return recipes;
}