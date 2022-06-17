function sellid() {
  let id =
    (Math.random() * 100).toString(36) +
    Math.floor(
      Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)
    ).toString(36);
  return id;
}
module.exports = sellid;
