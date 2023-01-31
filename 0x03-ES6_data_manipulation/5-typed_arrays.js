const createInt8TypedArray = (length, position, value) => {
  const arraybuff = new ArrayBuffer(length);
  const int8View = new Int8Array(arraybuff);
  int8View[position] = value;

  return int8View;
}

export default createInt8TypedArray;
