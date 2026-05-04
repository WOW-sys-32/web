function showPanel(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('on'));

  const panel = document.getElementById('panel-' + name);
  panel.classList.add('on');

  panel.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
