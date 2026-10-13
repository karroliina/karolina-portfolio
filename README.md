# Karolína Svatková — Interactive Portfolio

> **Concept Artist, Illustrator & Animator**  
> Prague School of Creative Communication | Lusófona University (Lisbon)  
> Contact: [svatekarolin@seznam.cz](mailto:svatekarolin@seznam.cz) | ArtStation: [karliien.artstation.com](https://karliien.artstation.com)

---

## Overview

This repository houses the interactive portfolio for **Karolína Svatková**, transformed from the original static PDF portfolio into a dark, atmospheric, brutalist web experience.

The design strictly obeys three guiding constraints:
1. **Zero Rounded Edges** (`border-radius: 0px !important` universally)
2. **Zero Emojis** (brutalist monospace markers and typographic accents only: `[+]`, `[-]`, `[->]`, `//`)
3. **Zero Gradients** (solid obsidian surfaces, sharp borders, and high-contrast chiaroscuro)

---

## Interactive Features

* **01 // The Lighting Laboratory (`ILLUSTRATION: COMPOSITION, COLOR, LIGHT`)**  
  An interactive study of the horned beast in the reeds across three distinct lighting environments:
  * `[01 // SUNSET]` — Fiery orange rim lighting & golden hour back-fire.
  * `[02 // MOONLIGHT]` — Cold silver moonlight with glowing amber eye bioluminescence.
  * `[03 // OVERCAST]` — Diffuse slate sky with soft tonal falloff.
  * `[04 // TRIPTYCH]` — Side-by-side comparison mode.

* **02 // Character Lineup Dossier (`HISTORICAL SCI-FI NOVEL`)**  
  Interactive roster detailing five character designs:
  * `EIKE` (Rebel Poet / Aristocrat)
  * `ALWIN` (Young Trench Scout)
  * `MILA` (Field Nurse / Sanitarian)
  * `CAPTAIN KURT` (Imperial Commander with Sabre)
  * `SERGEANT JÜRGEN` (Heavy Assault Raider)

* **03 // The Process Archive (`CREATIVE PIPELINE`)**  
  Stage-by-stage development view:
  * **Fantasy Novel Beast:** References -> Thumbnails -> Rough Line Sketches -> Grayscale Form Studies.
  * **Sci-Fi Animation Suit:** Rough Exploration -> Color Moodboards -> Pressurized Suit Orthographics.

* **04 // Final Turnarounds (`ANIMATION MODEL SHEETS`)**  
  Orthographic views for 2D/3D animation:
  * Four-angle cranial rotation (Side, 3/4, Front, Back).
  * Full body suit orthographics and solar insignia visor specs.

* **05 // Mysterious Atmosphere Engine**  
  * **Synthesized Dark Drone:** Built-in Web Audio API generator synthesizing a dual-oscillator low-frequency atmospheric rumble.
  * **Flashlight / Torch Mode:** Sharp aperture cutout canvas following the cursor through the darkness.
  * **High-Definition Inspector:** Click any artwork plate to view full-resolution source rendering.

---

## Architecture & Blueprint

See [`plan.md`](./plan.md) for the complete architectural specification, color codes, typography hierarchy, and asset mapping.

---

## Running Locally

Simply serve the repository folder with any static web server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx serve .
```

Then navigate to `http://localhost:8000` in your browser.
