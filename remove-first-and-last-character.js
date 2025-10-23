function removeChar(str) {
  if (str.length <= 2) {
    return "";
  }

  return str.slice(1, -1);
}
