function updateObjectWithKeyAndValue(object,key,value){ return  Object.assign({},object,{[key]:value});}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){ Object.assign(object,{[key]: value});}
var recipes={};