export default function validateArray(array) {
  if (!array.length) {
    return false;
  } else if (array.some((el) => isNaN(el))) {
    return false;
  } else return true;
}
