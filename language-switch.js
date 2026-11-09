// Preserve the selected section when moving to another language.
document.querySelectorAll('.language-switch a').forEach((link) => {
  link.addEventListener('click', () => {
    const destination = new URL(link.href);
    destination.hash = window.location.hash;
    link.href = destination.href;
  });
});
