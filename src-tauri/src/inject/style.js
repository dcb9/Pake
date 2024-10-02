window.addEventListener('DOMContentLoaded', _event => {
  // Customize and transform existing functions
  const contentCSS = ``;
  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  if (window['pakeConfig']?.hide_title_bar && isMac) {
    const topPaddingStyleElement = document.createElement('style');
    topPaddingStyleElement.innerHTML = topPaddingCSS;
    document.head.appendChild(topPaddingStyleElement);
  }
});
