
var recipes = {
    key:"value"
};

function updateObjectWithKeyAndValue(object,key,value){

    object[key]=value;

    return Object.assign({},object);
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
    object[key] = value;

    return object;
}

function deleteFromObjectByKey(object,key){
    var newObj = object;

    delete newObj.key;
    return newObj;
}

function destructivelyDeleteFromObjectByKey(object,key){
    delete object.key;
    return object;
}
