export function buttonDebounce(callback, delay = 500) {
  let timeOut;
  return () => {
    if (timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
      callback();
    }, delay);
  };
}
