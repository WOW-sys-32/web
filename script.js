function showPanel(name) {
  // 1. Cleanup: Remove 'on' class from ALL panels first
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('on'));

  // 2. Selection: Construct the ID
  const panelId = 'panel-' + name;
  const panel = document.getElementById(panelId);

  // 3. Safety Check (THE IMPROVEMENT): Check if the panel exists before proceeding
  if (panel) {
    // A. Activate the panel
    panel.classList.add('on');

    // B. Scroll smoothly to the activated panel
    panel.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  } else {
    // Optional: Provide feedback if the panel doesn't exist
    console.error(`Panel not found for name: ${name}. Expected ID: ${panelId}`);
  }
}
