  const altLinks = document.querySelectorAll('.font-controls[data-lang="alt"] a');
  const sanskritLinks = document.querySelectorAll('.font-controls[data-lang="sanskrit"] a');
  const altLangText = document.querySelectorAll('.alt-lang');
  const sanskritText = document.querySelectorAll('.sanskrit');

  function setFontSize(lang, size) {
    if (lang === "alt") {
      altLangText.forEach(el => el.style.fontSize = size);
      localStorage.setItem('altFontSize', size);
      altLinks.forEach(link =>
        link.classList.toggle('active', link.dataset.size === size)
      );
    } else if (lang === "sanskrit") {
      sanskritText.forEach(el => el.style.fontSize = size);
      localStorage.setItem('sanskritFontSize', size);
      sanskritLinks.forEach(link =>
        link.classList.toggle('active', link.dataset.size === size)
      );
    }
  }

  // Load saved sizes
  const savedAlt = localStorage.getItem('altFontSize') || '16px';
  const savedSanskrit = localStorage.getItem('sanskritFontSize') || '16px';
  setFontSize("alt", savedAlt);
  setFontSize("sanskrit", savedSanskrit);

  // Handle clicks for all font controls
  document.querySelectorAll('.font-controls').forEach(control => {
    const lang = control.dataset.lang;
    control.querySelectorAll('a').forEach(link => {
      ["click", "touchstart"].forEach(evt =>
        link.addEventListener(evt, function (e) {
          e.preventDefault();
          setFontSize(lang, this.dataset.size);
        })
      );
    });
  });

  // Floating menu toggle
  const gearTriggerHorizontal = document.getElementById("gearTriggerHorizontal");
  const gearTriggerVertical = document.getElementById("gearTriggerVertical");
  const fontMenu = document.getElementById("fontMenu");

  function toggleFontMenu(e) {
    e.stopPropagation();
    fontMenu.classList.toggle("visible");
  }

  ["click", "touchstart"].forEach(evt => {
    gearTriggerHorizontal?.addEventListener(evt, toggleFontMenu);
    gearTriggerVertical?.addEventListener(evt, toggleFontMenu);
  });

  document.addEventListener("click", (e) => {
    if (
      !fontMenu.contains(e.target) &&
      e.target !== gearTriggerHorizontal &&
      e.target !== gearTriggerVertical
    ) {
      fontMenu.classList.remove("visible");
    }
  });
