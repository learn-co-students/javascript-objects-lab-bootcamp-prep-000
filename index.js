var recipes = {
    Queen: "We are the champions"
};

//updateObjectWithKeyAndValue(recipes, "Blur","Song2" )

function updateObjectWithKeyAndValue(object, key, value)
{
     var copyObj;
     copyObj = Object.assign(object, {[key]:value});
     return copyObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
     object[key] = value;
     return object;
}

function deleteFromObjectByKey(object, key)
{
     var copyObj = object;
     delete copyObj.key;
     return copyObj;
}

function destructivelyDeleteFromObjectByKey(object, key)
{
    delete object.key;
    return object;  
}
