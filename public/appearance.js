(async function appearance() {
  const theme = localStorage.getItem("theme");
  if (theme === 'dark') {
    document.body.classList.add('dark');
  }
})();
