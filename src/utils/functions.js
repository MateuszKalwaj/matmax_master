export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const scrollToHeader = () => {
  setTimeout(() => {
    const top = document.querySelector("h2").offsetTop - 100;
    window.scrollTo(0, top);
  }, 0);
};
