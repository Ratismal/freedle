window.setTheme = function () {
  document.documentElement.className = localStorage.getItem('theme');
};

window.setTheme();
