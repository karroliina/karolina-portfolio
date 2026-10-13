# Architectural & Design Blueprint: Interactive Portfolio

**Artist:** Karolína Svatková  
**Disciplines:** Concept Art, Illustration, Animation & Character Design  
**Repository:** [karroliina/karolina-portfolio](https://github.com/karroliina/karolina-portfolio)  
**Status:** In Progress / MVP Ready  

---

## 1. Executive Summary & Vision

This project transforms the static PDF portfolio of Karolína Svatková into an atmospheric, mysterious, and deeply interactive web experience. Karolína's artwork is defined by dark fantasy, mythical creatures, historical sci-fi uniforms, and cinematic lighting studies.

### Core Constraints & Aesthetic Rules
* **No Rounded Edges:** Strict `border-radius: 0 !important` across all UI elements, buttons, modals, badges, and frames. Clean, sharp architectural and brutalist lines.
* **No Emojis:** Zero emojis anywhere in the interface or copy. All visual indicators use crisp monospace labels, custom geometric SVG icons, or brutalist typographic markers (`[+]`, `[-]`, `[01]`, `//`, `->`).
* **No Gradients:** Solid flat colors only (`#070707`, `#0f0f0f`, `#161616`, `#e8decb`, `#a31515`). Depth is achieved through high-contrast chiaroscuro, stark borders, layered silhouettes, and sharp spotlight masks.
* **Atmospheric & Mysterious Vibe:** A ritualistic, dark-monastery / cinematic sci-fi atmosphere with subtle CRT scanlines, custom crosshair cursor, flat spotlight illumination, and optional dark synthesized ambient drone via Web Audio API.
* **Preserve Visuals from Old Portfolio:** All 9 pages of original artwork, creature studies, orthographic turnarounds, character lineups, and lighting studies are preserved in ultra-high resolution and enhanced with interactivity.

---

## 2. Information Architecture & Interactive Features

```
+-----------------------------------------------------------------------------------+
| 00 // HEADER: STATUS HUD [KAROLÍNA SVATKOVÁ] [AUDIO: OFF] [PORTFOLIO 2026]        |
+-----------------------------------------------------------------------------------+
| 01 // HERO CHAMBER: "PORTO FOLIO."                                                |
|      - High-impact brutalist typography + Crimson signature script                |
|      - Hero artwork: Horned beast crouching in dark reeds with glowing amber eyes |
|      - Interactive flashlight beam / flat cutout reveal                           |
+-----------------------------------------------------------------------------------+
| 02 // DOSSIER / ABOUT: "I'M KAROLÍNA SVATKOVÁ"                                    |
|      - High-contrast portrait photo                                               |
|      - Background story: Nursing -> Animation & VFX transition                    |
|      - Prague School of Creative Communication & Lusófona Lisbon                  |
|      - ArtStation, Email, Phone contact matrix                                    |
+-----------------------------------------------------------------------------------+
| 03 // THE LIGHTING LABORATORY: "COMPOSITION, COLOR, LIGHT"                        |
|      - 3 Lighting Environments of the horned creature:                            |
|        [1] SUNSET (GOLDEN HOUR) | [2] MOONLIGHT (MIDNIGHT) | [3] OVERCAST (DAY)   |
|      - Interactive environment switcher altering the ambient lighting of the page|
|      - Side-by-side comparison slider and split-view examination                  |
+-----------------------------------------------------------------------------------+
| 04 // THE CHARACTER LINEUP: "HISTORICAL SCI-FI NOVEL"                             |
|      - Lineup: [EIKE] [ALWIN] [MILA] [CAPTAIN KURT] [SERGEANT JÜRGEN]             |
|      - Interactive dossier: Click any character to zoom in, view lore & uniform  |
+-----------------------------------------------------------------------------------+
| 05 // THE PROCESS ARCHIVE: "CREATIVE PIPELINE"                                    |
|      - Fantasy Creature: References -> Thumbnails -> Rough Sketches -> Grayscale  |
|      - Sci-Fi Suit: Sketches & Face Studies -> Line Orthos -> Final Turnarounds   |
|      - Step-by-step interactive timeline scrubber                                 |
+-----------------------------------------------------------------------------------+
| 06 // TURNAROUND MATRIX: "ANIMATION ORTHOGRAPHICS"                                |
|      - Head Turnaround: Side / Three-Quarter / Front / Back                       |
|      - Suit Turnaround: Front / Back / Side + Solar Insignia Helmet Detail        |
|      - Stepped angle rotation controller                                          |
+-----------------------------------------------------------------------------------+
| 07 // TERMINAL ARCHIVE & CONTACT: "THANK YOU. FOR YOUR ATTENTION"                 |
|      - Direct Email copy with instant feedback                                    |
|      - ArtStation external portfolio link                                         |
|      - Inquiry transmission form                                                  |
+-----------------------------------------------------------------------------------+
```

---

## 3. Detailed Interactive Component Specifications

### 3.1 The Lighting Laboratory (Page 8 Study)
* **Concept:** Karolína created three distinct lighting treatments of the same composition: a fiery sunset, an eerie moonlit night with glowing amber eyes, and an overcast daylight mood.
* **Interactivity:**
  * Interactive switch panel allowing visitors to flip between `SUNSET`, `MOONLIGHT`, and `OVERCAST`.
  * Ambient theme sync: selecting `MOONLIGHT` dims the entire UI and heightens contrast, while `SUNSET` introduces warm bronze-amber border accents.
  * Direct magnification loupe to inspect brush strokes and edge rendering.

### 3.2 The Historical Sci-Fi Lineup Dossier (Page 7)
* **Concept:** A character lineup spanning five distinct military and civilian roles:
  * **Eike:** Noble / poet aesthetic, long dark hair, ruffled white linen, gold medallion.
  * **Alwin:** Young infantryman, field scarf, military trench uniform, rifle slung.
  * **Mila:** Red cross field nurse, apron, modest habit, solemn posture.
  * **Captain Kurt:** Commander, peaked officer cap, long officer trench, sabre sword, ribbons.
  * **Sergeant Jürgen:** Battle-hardened veteran, rolled sleeves, dog tags, confident posture.
* **Interactivity:**
  * Interactive character selector with keyboard navigation (`1`-`5` keys or click).
  * High-res cropped spotlight with detailed character analysis.

### 3.3 The Process Pipeline Scrubber (Pages 3, 4, 5, 6)
* **Concept:** Showcases how raw ideas evolve into production-ready assets.
* **Stages:**
  * `01 // REFERENCES`: Visual research, historical photos, texture moodboards.
  * `02 // THUMBNAILS`: Rapid silhouette exploration and shape language.
  * `03 // SKETCHES`: Anatomical development, clothing layers, callouts.
  * `04 // GRAYSCALES`: Value hierarchy and tonal lighting exploration.
  * `05 // FINAL TURNAROUNDS`: Clean orthographic views for 3D sculptors and 2D animators.

### 3.4 Interactive Turnaround Viewer (Page 6)
* **Concept:** Animation model sheet showcasing front, back, and side views.
* **Interactivity:**
  * Clickable angle buttons: `[FRONT]`, `[PROFILE]`, `[BACK]`, `[HELMET SPEC]`.
  * Magnification inspector for animators and 3D modelers.

### 3.5 Atmospheric Ambient Audio Engine (Web Audio API)
* **Concept:** A subtle, mysterious cinematic drone synthesized directly in the browser with zero external audio assets.
* **Implementation:**
  * Dual low-frequency sine/triangle oscillators with slight frequency detuning (`55Hz` and `55.4Hz`).
  * Lowpass filter cutoff at `180Hz` to create deep, rumbling resonance.
  * User-controlled Mute / Unmute switch in the persistent HUD header with visual waveform animation.

---

## 4. Visual Identity & Design System

### 4.1 Color Palette
* **Void Black:** `#080808` (Primary background)
* **Obsidian Surface:** `#121212` (Card and panel backgrounds)
* **Deep Ash:** `#1e1e1e` (Containers and elevated surfaces)
* **Bone / Ivory:** `#ede3d4` (Primary typography and high-contrast lines)
* **Muted Clay:** `#968e82` (Secondary captions and metadata)
* **Stark Crimson:** `#a31515` (Signature accent, interactive buttons, warning indicators)
* **Amber Core:** `#d48b28` (Eyes / focus highlights)

### 4.2 Typography Hierarchy
* **Display / Brand Headline:** `Syne`, `Cinzel Decorative`, or system ultra-bold grotesque (`system-ui`, `Impact`, `Arial Black`).
* **Handwritten Signature:** `Caveat` or `Marck Script` for "Karolína Svatková" and "for your attention" to mirror the original PDF styling.
* **Data / HUD / Metadata:** `JetBrains Mono`, `Space Mono`, or `ui-monospace` for brutalist labels and process indicators.
* **Body / Reading Text:** `Space Grotesk`, `Inter`, or `Helvetica Neue` for readability.

### 4.3 Structural Rules
* **Border Radius:** `0px` universally (`* { border-radius: 0px !important; }`).
* **Borders:** `1px solid #2a2a2a` default; `1px solid #ede3d4` on focus/active; `1px solid #a31515` on accent.
* **Gradients:** Prohibited (`background-image: none !important` for gradients).
* **Emojis:** Prohibited.

---

## 5. Repository Structure & Deliverables

```
karolina-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD
├── assets/                       # High-resolution cropped assets
│   ├── hero_creature.png
│   ├── karolina_portrait.png
│   ├── lighting_sunset.png
│   ├── lighting_moonlight.png
│   ├── lighting_overcast.png
│   ├── character_eike.png
│   ├── character_alwin.png
│   ├── character_mila.png
│   ├── character_kurt.png
│   ├── character_jurgen.png
│   ├── lineup_full.png
│   ├── fantasy_references.png
│   ├── fantasy_thumbnails.png
│   ├── fantasy_sketches.png
│   ├── grayscales_full.png
│   ├── grayscale_shaman.png
│   ├── grayscale_beast.png
│   ├── scifi_sketches.png
│   ├── scifi_orthos.png
│   ├── scifi_references.png
│   ├── turnaround_head.png
│   └── turnaround_body.png
├── extracted_pages/              # 2880x1619 renders of all 9 original PDF pages
│   ├── page_1.png ... page_9.png
├── index.html                    # Single-page interactive application
├── style.css                     # Complete brutalist stylesheet (zero gradients, 0 radius)
├── app.js                        # Interactive controllers (lighting, lineup, audio, viewer)
├── plan.md                       # Complete architectural blueprint
├── README.md                     # GitHub repository overview & setup instructions
└── portfolio.pdf                 # Original PDF source archive
```

---

## 6. Implementation Roadmap

- [x] **Milestone 1:** PDF high-resolution extraction (all 9 pages rendered at 2880x1619).
- [x] **Milestone 2:** Asset cropping & asset library organization.
- [x] **Milestone 3:** GitHub repository setup (`karroliina/karolina-portfolio`).
- [x] **Milestone 4:** Full single-page interactive portfolio development (`index.html`, `style.css`, `app.js`).
- [x] **Milestone 5:** Push codebase to GitHub repository via GitHub Personal Access Token.
- [x] **Milestone 6:** GitHub Pages deployment configuration.
