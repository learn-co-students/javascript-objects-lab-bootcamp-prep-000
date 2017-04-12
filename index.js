var recipes = {key: "value"};

var updateObjectWithKeyAndValue = (obj, key, value) => {
      return Object.assign(obj, {[key]: value});
}

var destructivelyUpdateObjectWithKeyAndValue = (obj, key, value) => {
    obj[key] = value;
    return obj;
}

var deleteFromObjectByKey = (obj, key) => {
    var newObj = Object.assign({}, obj);
    delete newObj[key];
    return newObj;
}

var destructivelyDeleteFromObjectByKey = (obj, key) => {
    delete obj[key];
    return obj;
}