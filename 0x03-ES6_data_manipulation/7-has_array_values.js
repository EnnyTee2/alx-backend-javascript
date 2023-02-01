export default function hasValuesFromArray(set, array) {
  const set2 = new Set(array);
  set2.forEach(element) {
    if !(set.has(element)) {
      return false;
    }
  }
  return true;
}
