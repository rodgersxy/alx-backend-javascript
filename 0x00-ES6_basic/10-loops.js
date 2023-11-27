export default function appendToEachArrayValue(array, appendString) {
  for (const element of array) {
    array[array.indexOf(element)] = appendString + element;
  }

  return array;
}
