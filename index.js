var recipes = {}

function updateObjectWithKeyAndValue(object, key, value)
{
	return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
	object[key] = value
	return object
}

function deleteFromObjectByKey(object, key)
{
	Object.assign({}, object, {key})
	return delete object.key;

}

function destructivelyDeleteFromObjectByKey(object, key)
{
	return delete object[key]
}
