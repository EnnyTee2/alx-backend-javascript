const hasValuesFromArray = (set, array) => {
  for (element of array) {
    if (!set.has(element)) {
      return false;
    }
  } 
  return true;
}
export default hasValuesFromArray;
