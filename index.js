var recipes = {cookie: "chocolate", pizza: "cheese", soup: "chicken", salad: "lettuce"}

function updateObjectWithKeyAndValue(object, key, value) {
  return object[key] = value;
}

updateObjectWithKeyAndValue(recipes, "cupcake", "red velvet");
