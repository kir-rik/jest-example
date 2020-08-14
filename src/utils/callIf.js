// callIf(() => alert(42), () => 1 < 2) // alerts 42
// callIf(() => alert(42), () => 1 > 2) // doesn'alert

module.exports = (fn, predicate) => {
  if (predicate()) {
    fn();
  }
};
