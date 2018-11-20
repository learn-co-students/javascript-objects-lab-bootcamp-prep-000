var recipes={};

//: UpdateObject (Non-Destructive)
function updateObjectWithKeyAndValue(object, key, value){
	return Object.assign({}, object, {[key]:value});
}


//:UpdateObject (Destructive)
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
	return Object.assign(object, {[key]:value});
}

//:deleteFromObjectByKey(Non-Destructive)
function deleteFromObjectByKey(object, key){
	var objClone= Object.assign({}, object)
	delete objClone[key];
	return objClone;
}

//:deleteFromObjectByKey(Destructive)
function destructivelyDeleteFromObjectByKey(object, key){
	delete object[key];
	return object;
}
