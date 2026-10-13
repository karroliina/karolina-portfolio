/* ==========================================================================
   KAROLÍNA SVATKOVÁ INTERACTIVE PORTFOLIO — APP CONTROLLER
   Pure Vanilla JavaScript // High Performance // Zero External Dependencies
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. LIGHTING LABORATORY CONTROLLER
     -------------------------------------------------------------------------- */
  const lightingData = {
    sunset: {
      img: 'assets/lighting_sunset.png',
      tag: '[ENV: SUNSET // WARM RIM LIGHT]',
      title: 'ENVIRONMENT STUDY: SUNSET (GOLDEN HOUR)',
      desc: 'High-energy orange sky casting stark silhouettes on foreground reeds, highlighting hair volumes and horn contours with warm rim illumination.'
    },
    moonlight: {
      img: 'assets/lighting_moonlight.png',
      tag: '[ENV: MOONLIGHT // MIDNIGHT AMBER GLOW]',
      title: 'ENVIRONMENT STUDY: MOONLIGHT (MIDNIGHT)',
      desc: 'Cold silver moon casting deep eerie chiaroscuro shadows across the torso, while the amber demonic eyes ignite with high-contrast supernatural bioluminescence.'
    },
    overcast: {
      img: 'assets/lighting_overcast.png',
      tag: '[ENV: OVERCAST // DIFFUSE SKY]',
      title: 'ENVIRONMENT STUDY: OVERCAST (DIFFUSE DAY)',
      desc: 'Muted slate sky producing soft, non-directional atmospheric falloff. Balanced tonal values emphasizing realistic anatomy and creature fur texture.'
    }
  };

  const lightBtns = document.querySelectorAll('.lighting-btn[data-light]');
  const triptychBtn = document.getElementById('light-split-view-btn');
  const lightActiveImg = document.getElementById('lighting-active-img');
  const lightTag = document.getElementById('current-light-tag');
  const lightNote = document.getElementById('lighting-note');
  const singleStage = document.getElementById('lighting-single-stage');
  const triptychStage = document.getElementById('lighting-triptych-stage');

  function setLightingEnvironment(envKey) {
    const data = lightingData[envKey];
    if (!data) return;

    singleStage.classList.remove('hidden');
    triptychStage.classList.add('hidden');

    lightActiveImg.src = data.img;
    lightTag.textContent = data.tag;
    lightNote.querySelector('h4').textContent = data.title;
    lightNote.querySelector('p').textContent = data.desc;

    lightBtns.forEach(btn => {
      if (btn.dataset.light === envKey) {
        btn.classList.add('active');
        btn.querySelector('.btn-status').textContent = '[ACTIVE]';
      } else {
        btn.classList.remove('active');
        btn.querySelector('.btn-status').textContent = '[STANDBY]';
      }
    });
    if (triptychBtn) {
      triptychBtn.classList.remove('active');
      triptychBtn.querySelector('.btn-status').textContent = '[VIEW]';
    }
  }

  lightBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setLightingEnvironment(btn.dataset.light);
    });
  });

  if (triptychBtn) {
    triptychBtn.addEventListener('click', () => {
      singleStage.classList.add('hidden');
      triptychStage.classList.remove('hidden');
      lightBtns.forEach(btn => {
        btn.classList.remove('active');
        btn.querySelector('.btn-status').textContent = '[STANDBY]';
      });
      triptychBtn.classList.add('active');
      triptychBtn.querySelector('.btn-status').textContent = '[ACTIVE]';
    });
  }

  document.querySelectorAll('.triptych-col').forEach(col => {
    col.addEventListener('click', () => {
      const selectKey = col.dataset.select;
      if (selectKey) setLightingEnvironment(selectKey);
    });
  });


  /* --------------------------------------------------------------------------
     2. CHARACTER LINEUP DOSSIER CONTROLLER
     -------------------------------------------------------------------------- */
  const characterData = {
    eike: {
      tag: '[FIGURE: EIKE // INTELLECTUAL]',
      code: 'ID-01 // NOBLE / SCHOLAR',
      name: 'EIKE',
      role: 'POET / REBEL INTELLECTUAL',
      img: 'assets/character_eike.png',
      desc: 'Distinguished by loose ruffled aristocratic white shirts, dark tailored trousers, high riding boots, and a pendant necklace. Bears long dark hair and an expressive, reflective disposition contrary to the rigid military brass.',
      attire: 'Linen poet blouse, equestrian breeches, leather boots',
      gear: 'Gold sigil medallion, personal journal',
      tone: 'Burgundy, cream linen, earthen brown'
    },
    alwin: {
      tag: '[FIGURE: ALWIN // SCOUT]',
      code: 'ID-02 // INFANTRY / VANGUARD',
      name: 'ALWIN',
      role: 'YOUNG CONSCRIPT SCOUT',
      img: 'assets/character_alwin.png',
      desc: 'Youthful infantry recruit with a red neck scarf, heavy field trench uniform, and bolt-action rifle slung across his back. His guarded stance conveys the weariness of frontline patrol.',
      attire: 'Heavy military trench tunic, puttees, woolen scarf',
      gear: 'Bolt-action rifle, ammo pouches, field canteen',
      tone: 'Olive drab, woolen khaki, brick red'
    },
    mila: {
      tag: '[FIGURE: MILA // COMBAT MEDIC]',
      code: 'ID-03 // FIELD NURSE',
      name: 'MILA',
      role: 'FIELD HOSPITAL SANITARIAN',
      img: 'assets/character_mila.png',
      desc: 'Stands solemnly with hands folded over a red-cross-insignia apron and medical nurse habit. Represents calm resilience amidst wartime trauma and industrial devastation.',
      attire: 'White starched apron, cadet blue gown, nursing headdress',
      gear: 'Medical cross emblem, triage satchel, sterilizing kit',
      tone: 'Pure white, cadet blue, crimson cross'
    },
    kurt: {
      tag: '[FIGURE: CAPTAIN KURT // COMMANDER]',
      code: 'ID-04 // OFFICER',
      name: 'CAPTAIN KURT',
      role: 'IMPERIAL HIGH COMMANDER',
      img: 'assets/character_kurt.png',
      desc: 'High-ranking field officer in peaked visor cap and full-length double-breasted officer overcoat. One gloved hand rests on the ornate hilt of his ceremonial sabre, decorated with valor medals.',
      attire: 'Peaked command cap, double-breasted heavy greatcoat, jackboots',
      gear: 'Ceremonial sabre sword, iron crosses, leather gloves',
      tone: 'Charcoal wool, gold bullion, brass medals'
    },
    jurgen: {
      tag: '[FIGURE: SERGEANT JÜRGEN // ASSAULT]',
      code: 'ID-05 // COMBAT VETERAN',
      name: 'SERGEANT JÜRGEN',
      role: 'HEAVY ASSAULT SERGEANT',
      img: 'assets/character_jurgen.png',
      desc: 'Burly combat-hardened non-commissioned officer with rolled uniform sleeves and visible dog tags. His scarred face and heavy leather shoulder bag reflect decades on brutal frontlines.',
      attire: 'Rolled-sleeve tactical field shirt, combat trousers, gaiters',
      gear: 'Dog tags, heavy leather satchel, combat blade',
      tone: 'Muted slate, military olive, worn leather'
    }
  };

  const charTabs = document.querySelectorAll('.lineup-tab');
  const charTag = document.getElementById('char-tag');
  const charFocusImg = document.getElementById('char-focus-img');
  const charCode = document.getElementById('char-code');
  const charName = document.getElementById('char-name');
  const charRole = document.getElementById('char-role');
  const charDesc = document.getElementById('char-desc');
  const charAttire = document.getElementById('char-attire');
  const charGear = document.getElementById('char-gear');
  const charTone = document.getElementById('char-tone');

  function setCharacter(charKey) {
    const data = characterData[charKey];
    if (!data) return;

    charTag.textContent = data.tag;
    charFocusImg.src = data.img;
    charFocusImg.alt = data.name;
    charCode.textContent = data.code;
    charName.textContent = data.name;
    charRole.textContent = data.role;
    charDesc.textContent = data.desc;
    charAttire.textContent = data.attire;
    charGear.textContent = data.gear;
    charTone.textContent = data.tone;

    charTabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.char === charKey);
    });
  }

  charTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      setCharacter(tab.dataset.char);
    });
  });


  /* --------------------------------------------------------------------------
     3. PROCESS ARCHIVE CONTROLLER
     -------------------------------------------------------------------------- */
  const projectBtns = document.querySelectorAll('.process-project-btn');
  const pipeFantasy = document.getElementById('pipeline-fantasy');
  const pipeScifi = document.getElementById('pipeline-scifi');

  projectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      projectBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const isFantasy = btn.dataset.project === 'fantasy';
      pipeFantasy.classList.toggle('hidden', !isFantasy);
      pipeScifi.classList.toggle('hidden', isFantasy);
    });
  });

  // Fantasy steps
  const fantasySteps = {
    'ref-f': {
      tag: '[STAGE 01 // REFERENCES MOODBOARD]',
      img: 'assets/fantasy_references.png',
      title: 'STAGE 01 // CULTURAL & MATERIAL REFERENCES',
      desc: 'Collection of ethnographic headdresses, reed textures, sheep fur patterns, tribal ornaments, and animal tooth structures that informed the beast\'s design.'
    },
    'thumb-f': {
      tag: '[STAGE 02 // THUMBNAIL EXPLORATIONS]',
      img: 'assets/fantasy_thumbnails.png',
      title: 'STAGE 02 // SILHOUETTES & VOLUME DISTRIBUTION',
      desc: 'Rapid black-and-white silhouette tests exploring posture balance: hunched predator vs towering reed shaman, tail configurations, and horn silhouettes.'
    },
    'sketch-f': {
      tag: '[STAGE 03 // LINEWORK & ANATOMICAL CALLOUTS]',
      img: 'assets/fantasy_sketches.png',
      title: 'STAGE 03 // DETAILED SKETCHES & NOTES',
      desc: 'Pencil-style line art annotating material placements: dried weeds, elf ears, sheep fur shoulder mantles, dried hyperberries, and claw articulation.'
    },
    'gray-f': {
      tag: '[STAGE 04 // FINAL PICKED GRAYSCALES]',
      img: 'assets/grayscales_full.png',
      title: 'STAGE 04 // TONAL VALUES & TEXTURE RENDERING',
      desc: 'High-contrast grayscale renderings depicting the feathered shamanic hunter and the curled ram-horned cloaked creature with digitigrade hoof anatomy.'
    }
  };

  const fantasyStepBtns = pipeFantasy.querySelectorAll('.pipe-step-btn');
  const fantasyPipeImg = document.getElementById('fantasy-pipe-img');
  const fantasyPipeTag = document.getElementById('fantasy-pipe-tag');
  const fantasyPipeMeta = document.getElementById('fantasy-pipe-meta');

  fantasyStepBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      fantasyStepBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const data = fantasySteps[btn.dataset.step];
      if (data) {
        fantasyPipeTag.textContent = data.tag;
        fantasyPipeImg.src = data.img;
        fantasyPipeMeta.querySelector('h4').textContent = data.title;
        fantasyPipeMeta.querySelector('p').textContent = data.desc;
      }
    });
  });

  // Sci-Fi steps
  const scifiSteps = {
    'sketch-s': {
      tag: '[STAGE 01 // ROUGH EXPLORATION & CHESTPLATE CALLOUTS]',
      img: 'assets/scifi_sketches.png',
      title: 'STAGE 01 // ROUGH EXPLORATION & FACIAL STUDIES',
      desc: 'Quick silhouette exploration, suit latch mechanisms, chestplate harness notes, and astronaut facial structure studies exploring proportions for animation.'
    },
    'ref-s': {
      tag: '[STAGE 02 // COLOR REFERENCES & INSPIRATIONS]',
      img: 'assets/scifi_references.png',
      title: 'STAGE 02 // CINEMATIC COLOR & STYLE REFERENCES',
      desc: 'Reference palette boards from iconic animation and sci-fi films examining lighting mood, pressure suit materials, and high-energy color harmonies.'
    },
    'ortho-s': {
      tag: '[STAGE 03 // SUIT ORTHOGRAPHIC LINEART]',
      img: 'assets/scifi_orthos.png',
      title: 'STAGE 03 // PRESSURIZED SUIT ORTHOGRAPHICS',
      desc: 'Front, back, and 3/4 line art specifying joint seals, bulky insulated boots, oxygen hose connections, and helmet collar lock rings.'
    }
  };

  const scifiStepBtns = pipeScifi.querySelectorAll('.pipe-step-btn');
  const scifiPipeImg = document.getElementById('scifi-pipe-img');
  const scifiPipeTag = document.getElementById('scifi-pipe-tag');
  const scifiPipeMeta = document.getElementById('scifi-pipe-meta');

  scifiStepBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      scifiStepBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const data = scifiSteps[btn.dataset.step];
      if (data) {
        scifiPipeTag.textContent = data.tag;
        scifiPipeImg.src = data.img;
        scifiPipeMeta.querySelector('h4').textContent = data.title;
        scifiPipeMeta.querySelector('p').textContent = data.desc;
      }
    });
  });


  /* --------------------------------------------------------------------------
     4. DARK AMBIENT AUDIO SYNTHESIZER (WEB AUDIO API)
     -------------------------------------------------------------------------- */
  let audioCtx = null;
  let osc1 = null;
  let osc2 = null;
  let filter = null;
  let gainNode = null;
  let isAudioPlaying = false;
  const audioToggleBtn = document.getElementById('audio-toggle');

  function initDarkDrone() {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();

      // Deep drone oscillators
      osc1 = audioCtx.createOscillator();
      osc2 = audioCtx.createOscillator();
      osc1.type = 'sawtooth';
      osc2.type = 'triangle';
      osc1.frequency.setValueAtTime(55, audioCtx.currentTime); // A1 note
      osc2.frequency.setValueAtTime(55.35, audioCtx.currentTime); // Slight detune for subtle beating

      // Lowpass filter to keep it deep, dark and rumble-like
      filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(140, audioCtx.currentTime);
      filter.Q.setValueAtTime(3.0, audioCtx.currentTime);

      gainNode = audioCtx.createGain();
      gainNode.gain.setValueAtTime(0.0001, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.2, audioCtx.currentTime + 2.0);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      osc1.start();
      osc2.start();
      isAudioPlaying = true;
      audioToggleBtn.textContent = '[SOUND: ON]';
      audioToggleBtn.classList.add('active');
    } catch (e) {
      console.warn('AudioContext not supported or blocked:', e);
    }
  }

  function stopDarkDrone() {
    if (!audioCtx || !gainNode) return;
    gainNode.gain.setValueAtTime(gainNode.gain.value, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.0);
    setTimeout(() => {
      try {
        osc1?.stop();
        osc2?.stop();
        audioCtx?.close();
      } catch (err) {}
      audioCtx = null;
      isAudioPlaying = false;
      audioToggleBtn.textContent = '[SOUND: OFF]';
      audioToggleBtn.classList.remove('active');
    }, 1000);
  }

  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
      if (!isAudioPlaying) {
        initDarkDrone();
      } else {
        stopDarkDrone();
      }
    });
  }


  /* --------------------------------------------------------------------------
     5. TORCHLIGHT MASK CONTROLLER (NO GRADIENTS // PURE CUTOUT)
     -------------------------------------------------------------------------- */
  const torchCanvas = document.getElementById('torch-canvas');
  const torchToggle = document.getElementById('torch-toggle');
  let torchActive = false;
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  function resizeTorchCanvas() {
    if (!torchCanvas) return;
    torchCanvas.width = window.innerWidth;
    torchCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeTorchCanvas);
  resizeTorchCanvas();

  function drawTorch() {
    if (!torchActive || !torchCanvas) return;
    const ctx = torchCanvas.getContext('2d');
    const w = torchCanvas.width;
    const h = torchCanvas.height;

    ctx.clearRect(0, 0, w, h);

    // Deep flat black overlay (strict rule: zero gradients!)
    ctx.fillStyle = 'rgba(7, 7, 7, 0.88)';
    ctx.fillRect(0, 0, w, h);

    // Flat sharp circular aperture cutout
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 220, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Crosshair in torch center
    ctx.save();
    ctx.strokeStyle = '#cfa052';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(mouseX - 20, mouseY);
    ctx.lineTo(mouseX + 20, mouseY);
    ctx.moveTo(mouseX, mouseY - 20);
    ctx.lineTo(mouseX, mouseY + 20);
    ctx.stroke();
    ctx.restore();

    requestAnimationFrame(drawTorch);
  }

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  if (torchToggle) {
    torchToggle.addEventListener('click', () => {
      torchActive = !torchActive;
      document.body.classList.toggle('torch-active', torchActive);
      if (torchActive) {
        torchToggle.textContent = '[TORCH: ON]';
        torchToggle.classList.add('active');
        resizeTorchCanvas();
        requestAnimationFrame(drawTorch);
      } else {
        torchToggle.textContent = '[TORCH: OFF]';
        torchToggle.classList.remove('active');
      }
    });
  }


  /* --------------------------------------------------------------------------
     6. FULLSCREEN HIGH-DEFINITION INSPECTOR MODAL
     -------------------------------------------------------------------------- */
  const modal = document.getElementById('inspector-modal');
  const modalImg = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBackdrop = modal.querySelector('.modal-backdrop');

  function openInspector(imgSrc, altText) {
    modalImg.src = imgSrc;
    modalImg.alt = altText || 'Artwork inspection';
    modalTitle.textContent = `[INSPECT // ${altText ? altText.toUpperCase() : 'PORTFOLIO PLATE'}]`;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeInspector() {
    modal.classList.add('hidden');
    modalImg.src = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.inspectable-image').forEach(img => {
    img.addEventListener('click', () => {
      openInspector(img.src, img.alt);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeInspector);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeInspector);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeInspector();
    }
  });


  /* --------------------------------------------------------------------------
     7. COPY EMAIL CLIPBOARD ACTIONS
     -------------------------------------------------------------------------- */
  function copyEmailAction(btn, text) {
    const email = 'svatekarolin@seznam.cz';
    navigator.clipboard.writeText(email).then(() => {
      const originalText = btn.innerHTML;
      btn.innerHTML = `<span class="btn-text">[COPIED: ${email}]</span>`;
      setTimeout(() => {
        btn.innerHTML = originalText;
      }, 2500);
    }).catch(() => {
      window.location.href = `mailto:${email}`;
    });
  }

  const copyHeroBtn = document.getElementById('copy-email-hero');
  if (copyHeroBtn) {
    copyHeroBtn.addEventListener('click', (e) => {
      e.preventDefault();
      copyEmailAction(copyHeroBtn);
    });
  }

  const copyContactBtn = document.getElementById('copy-email-btn');
  if (copyContactBtn) {
    copyContactBtn.addEventListener('click', (e) => {
      e.preventDefault();
      copyEmailAction(copyContactBtn);
    });
  }


  /* --------------------------------------------------------------------------
     8. TRANSMISSION FORM HANDLER
     -------------------------------------------------------------------------- */
  const transmitForm = document.getElementById('transmit-form');
  const formFeedback = document.getElementById('form-feedback');

  if (transmitForm) {
    transmitForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const sender = document.getElementById('form-sender').value;
      const email = document.getElementById('form-email').value;
      const message = document.getElementById('form-inquiry').value;

      formFeedback.classList.remove('hidden');
      formFeedback.textContent = `[PREPARING TRANSMISSION TO svatekarolin@seznam.cz FROM ${sender.toUpperCase()}]`;

      const subject = encodeURIComponent(`Portfolio Inquiry from ${sender}`);
      const body = encodeURIComponent(`From: ${sender} (${email})\n\nMessage:\n${message}`);
      
      setTimeout(() => {
        window.location.href = `mailto:svatekarolin@seznam.cz?subject=${subject}&body=${body}`;
        formFeedback.textContent = '[TRANSMISSION DISPATCHED TO LOCAL MAIL CLIENT]';
      }, 700);
    });
  }

});
