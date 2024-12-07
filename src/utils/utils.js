const debounce = (fn, delay, immediate = false) => {
  let timeout;

  return function (...args) {
    const context = this;

    const later = () => {
      timeout = null;
      if (!immediate) fn.apply(context, args);
    };

    const callnow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
    if (callnow) fn.apply(context, args);
  };
};
