export default function hasValuesFromArray(set, array) {
  const set2 = new Set(array);
  for (element of set2.values()) {
    if (!set.has(element)) {
      return false;
    }
  } 
  return true;
}
