// This first one was the reverse of the last lab, I started out trying to make it destructive and that didn't work,
// switched to making it not destructive and it worked! 
var obj = { prop: 1 };
const recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
	//obj[key] = value;
	return Object.assign({}, obj, { [key]: value }); 
}

updateObjectWithKeyAndValue({}, 'prop', 2);


function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
	obj[key] = value;
	return obj;
}

destructivelyUpdateObjectWithKeyAndValue({}, 'prop', 2);

function deleteFromObjectByKey() {
	//delete obj.prop; was destructive
	obj = {};
	return obj;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
	delete obj.prop;
	return obj;
}

