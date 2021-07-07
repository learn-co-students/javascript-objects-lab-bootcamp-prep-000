function updateObjectWithKeyAndValue(object,key,value){ return  Object.assign({},object,{[key]:value});}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){ Object.assign(object,{[key]: value}); return object;}
var recipes={};
function deleteFromObjectByKey(object,key){var copy=Object.assign({},object);delete copy[key]; return copy;}
function destructivelyDeleteFromObjectByKey(object,key){delete object[key]; return object}