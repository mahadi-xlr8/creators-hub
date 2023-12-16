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

export function searchDebounce(callback, delay = 500) {
  let timeOut;

  if (timeOut) {
    clearTimeout(timeOut);
  }
  timeOut = setTimeout(() => {
    callback();
  }, delay);
}
