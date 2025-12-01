function largestSwap(num) {
  let reversedNum = (num % 10) * 10 + Math.floor(num / 10);
  return num >= reversedNum;
}
