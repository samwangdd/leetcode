function plusOne(digits) {
  return (BigInt(digits.join("")) + 1n).toString().split("");
}
