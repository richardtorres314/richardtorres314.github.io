(async function appearance() {
  const theme = localStorage.getItem("theme");
  if (theme === null) {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkScheme) {
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark');
    }
  }
  if (theme === 'dark') {
    document.body.classList.add('dark');
  }
})();
