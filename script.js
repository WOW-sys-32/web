function showPanel(name) {
  //Remove 'on' class from ALL panels first
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('on'));

  // Construct the ID
  const panelId = 'panel-' + name;
  const panel = document.getElementById(panelId);

  // Safety Check
  if (panel) {
    // Activate the panel
    panel.classList.add('on');

    // Scroll smoothly to the activated panel
    panel.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  } else {
    // feedback if the panel doesn't exist
    console.error(`Panel not found for name: ${name}. Expected ID: ${panelId}`);
  }
}
