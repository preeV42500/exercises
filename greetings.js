function greetings(array, obj) {
  // create person's name using joined array
  // create person's occupation using values of object keys
  return "Hello, " + array.join(' ') + "! Nice to have a " + occupation(obj) + " around.";
}
function occupation(obj) {
  return obj.title + " " + obj.occupation;
}
