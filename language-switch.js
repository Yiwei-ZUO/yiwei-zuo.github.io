// Preserve the selected section when moving to another language.
document.querySelectorAll('.language-switch a').forEach((link) => {
  link.addEventListener('click', () => {
    const destination = new URL(link.href);
    destination.hash = window.location.hash;
    link.href = destination.href;
    link.closest('details').removeAttribute('open');
  });
});

document.addEventListener('click', (event) => {
  document.querySelectorAll('.language-menu[open]').forEach((menu) => {
    if (!menu.contains(event.target)) menu.removeAttribute('open');
  });
});
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  document.querySelectorAll('.language-menu[open]').forEach((menu) => {
    menu.removeAttribute('open');
    menu.querySelector('summary').focus();
  });
});
