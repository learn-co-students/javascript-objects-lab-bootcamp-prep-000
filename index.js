var recipes = {};

function updateObjectWithKeyAndValue(object, key, value)
{
    var newO = Object.assign(object, {[key]: value})
    return newO;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
    object[key] = value;
    return object;
}

function deleteFromObjectByKey(object, key)
{
    var newO = Object.assign({}, object);
    delete newO.key;
    return newO;
}

function destructivelyDeleteFromObjectByKey(object, key)
{
    delete object.key;
    return object;
}
