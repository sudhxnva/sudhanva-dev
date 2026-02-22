# Portfolio Website Plan — sudhanva.dev

## Context

Building a personal portfolio website from scratch for Sudhanva Manjunath — a software engineer passionate about UX and HCI, currently pursuing an MS CS at CU Boulder. The site must feel premium and polished while expressing a distinctive aesthetic: **Apple minimalism × Pokemon Emerald × 8-bit pixel art × terminal/hacker style**. These influences blend into a coherent dark-themed design language rather than a collage.

Key requirements: boot-sequence loading animation, smooth Framer Motion transitions, pixel art CSS elements, terminal typewriter effects, glassmorphism cards, CRT scanline overlay, and a dark/light theme toggle.

---

## Stack

| Tool | Package |
|---|---|
| Framework | `next@15` (App Router, TypeScript, Tailwind v4) |
| Animations | `motion@12` (Framer Motion rebranded — import from `"motion/react"`) |
| Class utils | `clsx` + `tailwind-merge` (used in a `cn()` helper) |
| Fonts | `next/font/google` — Press Start 2P, JetBrains Mono, Inter |

> **Note:** Tailwind v4 is installed (not v3). Uses `@theme` block in `globals.css` instead of `tailwind.config.ts`. motion@12 is installed (plan originally specified v11 — API is identical).

---

## Design System

### Color Palette

```
Backgrounds:
  bg-primary:    #050a05   (near-black, green-tinted — terminal base)
  bg-secondary:  #0d1117   (terminal windows, GitHub dark)
  bg-tertiary:   #111827   (card backgrounds)

Pokemon Emerald Greens:
  green-primary: #00a651   (main accent — Pokemon Emerald exact)
  green-bright:  #39ff14   (neon terminal green — cursor, glows)
  green-muted:   #1a4d2e   (borders, dividers)
  green-dim:     #0f2918   (subtle bg variation)

Apple Neutrals (also used in light mode):
  white:         #f5f5f7   (primary text)
  gray-100:      #e5e5ea   (secondary text)
  gray-400:      #8e8e93   (metadata, timestamps)
  gray-700:      #3a3a3c   (subtle borders)

Amber Accent:
  amber:         #ffb800   (warning, highlight, light mode accent)

Light Mode Overrides:
  bg-primary:    #f5f5f7   (Apple off-white)
  bg-secondary:  #ffffff   (pure white cards)
  text:          #1d1d1f   (Apple near-black)
  green stays the same — provides continuity across themes
```

### Typography

| Font | Role | Used For |
|---|---|---|
| Press Start 2P | 8-bit display accent | Section headings, boot screen logo, nav wordmark. 10–16px only. |
| JetBrains Mono | Terminal / code | Terminal windows, skill names, dates, tech stack tags, typewriter text |
| Inter | Clean body | Bio paragraphs, project descriptions, readable prose |

CSS variables: `--font-pixel`, `--font-mono`, `--font-sans`

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout: fonts, metadata, CRTOverlay, ThemeProvider
│   ├── page.tsx            # Single page: LoadingScreen + all sections
│   └── globals.css         # CSS vars, CRT scanlines, cursor blink, grid animation
├── components/
│   ├── layout/
│   │   ├── NavBar.tsx          # Sticky glass nav, pixel-border active link, theme toggle
│   │   └── SectionWrapper.tsx  # Scroll-triggered fadeInUp wrapper (respects reduced-motion)
│   ├── sections/
│   │   ├── LoadingScreen.tsx   # Boot sequence (Game Boy logo → terminal lines → CRT exit)
│   │   ├── Hero.tsx            # Letter-stagger name reveal, typewriter subtitle, pixel decorations
│   │   ├── About.tsx           # TerminalWindow bio + CSS pixel-art avatar (floating)
│   │   ├── Experience.tsx      # Alternating timeline cards, terminal bullet points
│   │   ├── Projects.tsx        # 2-up project cards (glass + pixel border)
│   │   ├── Skills.tsx          # Pokemon stat bars grouped by category
│   │   ├── Education.tsx       # Clean Apple-style cards for CU Boulder + PES
│   │   └── Contact.tsx         # Interactive terminal window with links
│   ├── ui/
│   │   ├── PixelBorder.tsx     # CSS box-shadow pixel border wrapper
│   │   ├── TerminalWindow.tsx  # Terminal chrome (pixel dots, $ prompt, typed content)
│   │   ├── TypewriterText.tsx  # Cycling typewriter with blinking cursor
│   │   ├── GlassCard.tsx       # Glassmorphism card (backdrop-filter + pixel-border combo)
│   │   ├── PixelStatBar.tsx    # Animated Pokemon-style segmented progress bar
│   │   ├── CRTOverlay.tsx      # Fixed scanline + vignette overlay (pointer-events: none)
│   │   ├── PixelSprite.tsx     # CSS box-shadow pixel art sprites (pokeball, stars, etc.)
│   │   ├── SectionHeading.tsx  # ">_" prompt + Press Start 2P title + draw-in underline
│   │   └── ThemeToggle.tsx     # Pixel-art toggle button (dark ↔ light)
│   └── providers/
│       └── ThemeProvider.tsx   # Context: loadingComplete state + dark/light theme
├── hooks/
│   ├── useTypewriter.ts        # Interval-based typewriter (cleans up on unmount)
│   ├── useScrollSection.ts     # Active section tracking for NavBar highlight
│   └── useReducedMotion.ts     # Wraps prefers-reduced-motion media query
├── lib/
│   ├── animations.ts           # All Framer Motion variants (centralized)
│   ├── cn.ts                   # clsx + tailwind-merge utility
│   └── data.ts                 # All portfolio content (structured, typed)
└── types/
    └── index.ts                # TypeScript interfaces for data shapes
```

---

## Content (from resume + provided info)

### Experience
1. **Games24x7** — Software Engineer, Jan 2023 – July 2025 (Hybrid)
   - AI image recognition feature → +2.34% ARPU
   - Network layer re-architecture → 48% cold start reduction (2.9s → 1.5s)
   - React Native major version upgrade for 10M+ user app
   - Cursor-accelerated dev → 60% UT writing time reduction
   - Redux persistence middleware reused across 3+ projects
   - 5000+ LOC refactor → 90% unit test coverage
   - Unified 3 OTA pipelines into one CI/CD system

2. **Inika Design Studio** — Full-Stack Developer Intern, Jun 2022 – Jul 2022 (Remote)
   - Shopify Plus order tracker (React SSR) → fulfilment time 4-5 days → <2 days, 5000+ orders/mo
   - iOS hyperlocal event discovery app — architected backend + frontend, led team of 3

### Projects
1. **Mobile App Sanity Automation Suite** *(highlight — most impressive)*
   - PR push → GitHub Actions → Lambda reads diff + RAG on codebase → plain-English test instructions
   - EC2 instance: Claude Code + headless Android emulator + ADB MCP
   - Claude Code takes screenshots, reads UI tree, uses XPath/coordinates to interact
   - Result + failure reason posted back to PR
   - 75% developer time saved; auto-hands off to QA on success
   - Stack: GitHub Actions, AWS Lambda, EC2, Claude Code, ADB MCP, RAG, Android Emulator

2. **Near Real-Time Crime Detection using Drones & CNNs**
   - Bandwidth-efficient pipeline: local processing, transmit key frames only
   - DJI Tello drone + Flask backend + DenseNet-121 CNN over UDP
   - OpenCV facial recognition + tracking on edge devices
   - Co-authored published paper under Dr. Sandesh Jayanth
   - Stack: Python, Flask, CNN, OpenCV, DJI SDK

### Skills (with approximate stat bar levels for visualization)
- **Languages**: TypeScript (95), JavaScript (95), Python (85), Java (75), C++ (65), Kotlin (75), Swift (70), Go (60), Dart (65), SQL (80)
- **Frameworks**: React (95), React Native (90), Next.js (90), Node.js (85), Expo (85), Express.js (80), Flutter (70), Vue (65)
- **Cloud & DevOps**: AWS (85), GCP (70), Docker (80), Kubernetes (65), GitHub Actions (85)
- **AI/ML**: Generative AI (85), LLMs/RAG (85), CNNs (75), RL (65)
- **Tools**: Figma (80), Claude Code (90), GraphQL (75), Kafka (65)

### Education
- **University of Colorado Boulder** — M.S. Computer Science, CGPA 3.9/4.0, Aug 2025–Present
  Coursework: User Centered Design & Development, Building AI Agents, Data Mining, Computer Graphics
- **PES University** — B.Tech Computer Science & Engineering, CGPA 3.7/4.0, Aug 2019–May 2023
  Coursework: Machine Intelligence, Web Technologies, Database Management Systems

### Contact
- Email: sudhanva.m@icloud.com
- LinkedIn: linkedin.com/in/sudhanva-m
- GitHub: github.com/sudhxnva
- Phone: (303) 505-7325

---

## Key UI Patterns

### Pixel Border (box-shadow, no border-radius)
```css
box-shadow:
  0 -4px 0 0 #00a651, 0 4px 0 0 #00a651,
  -4px 0 0 0 #00a651, 4px 0 0 0 #00a651,
  -4px -4px 0 0 #050a05, 4px -4px 0 0 #050a05,
  -4px 4px 0 0 #050a05, 4px 4px 0 0 #050a05;
```

### CRT Scanlines (fixed overlay, z-index: 9999, pointer-events: none)
```css
background: repeating-linear-gradient(
  0deg, transparent, transparent 2px,
  rgba(0,0,0,0.12) 2px, rgba(0,0,0,0.12) 4px
);
```
Plus a `::after` radial-gradient vignette.

### Glass Card
```css
backdrop-filter: blur(12px) saturate(180%);
-webkit-backdrop-filter: blur(12px) saturate(180%);
background: rgba(17, 24, 39, 0.6);
border: 1px solid rgba(255, 255, 255, 0.08);
```
Note: never set `overflow: hidden` on glass card parents (breaks WebKit blur).

### Pixel Avatar
CSS box-shadow sprite (1px × 1px div scaled up with `transform: scale(8)`). Floating animation: `animate={{ y: [0, -8, 0] }}` infinite with 4s ease-in-out.

### Hero Grid Background
```css
background-image:
  linear-gradient(rgba(0,166,81,0.05) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0,166,81,0.05) 1px, transparent 1px);
background-size: 40px 40px;
animation: grid-drift 20s linear infinite;
```

---

## Animation Strategy (Framer Motion via `lib/animations.ts`)

| Component | Animation | Trigger |
|---|---|---|
| LoadingScreen | Sequential typewriter → CRT flicker exit (`scaleY: 1→0`) | Mount (timed) |
| Hero name | Letter stagger `y: 20→0, opacity: 0→1, rotateX: -90→0` | Post-load mount |
| Hero subtitle | `TypewriterText` cycling 3 roles | Loop |
| NavBar | Slide down from `y: -60→0` + fade | Post-load mount |
| SectionWrapper | `fadeInUp` on all section content | `whileInView`, once |
| About avatar | Infinite float `y: [0,-8,0]` | Always |
| Experience cards | Alternating `slideInLeft`/`slideInRight` | `whileInView` |
| Project cards | `fadeInUp` stagger + `cardPop` on hover | `whileInView` + `whileHover` |
| Skill stat bars | Width `0→N%` spring animation | `whileInView`, once |
| Section headings | Underline `scaleX: 0→1` draw-in | `whileInView` |
| Contact terminal | Lines type in sequence | `whileInView` |

### Loading Screen Sequence
```
t=0ms:    Black screen
t=100ms:  Pixel logo fades in (400ms)
t=600ms:  Terminal lines print one-by-one (350ms each):
            > Booting sudhanva.dev...
            > Loading modules... OK
            > Establishing connection... OK
            > Ready.
t=2000ms: Green flash, "BOOT OK"
t=2400ms: CRT exit: scaleY 1→0 (200ms)
t=2600ms: LoadingScreen unmounts via AnimatePresence
```

`AnimatePresence` wraps the conditional render in `page.tsx`. `LoadingScreen` requires a `key` prop for exit detection.

---

## Theme Toggle

- Dark mode: full terminal aesthetic (default)
- Light mode: Apple-inspired whites/grays, same green accents for continuity
- Toggle: pixel-art button in NavBar (moon/sun icon as CSS sprite)
- Implemented via `ThemeProvider` context + `data-theme` attribute on `<html>`
- Tailwind dark mode: `"class"` strategy

---

## Implementation Order (GitHub Issues)

| Issue | Scope |
|---|---|
| [#1](https://github.com/sudhxnva/sudhanva-dev/issues/1) | Core UI primitives — PixelBorder, GlassCard, SectionHeading, SectionWrapper |
| [#2](https://github.com/sudhxnva/sudhanva-dev/issues/2) | Hooks + ThemeToggle — useReducedMotion, useTypewriter, useScrollSection |
| [#3](https://github.com/sudhxnva/sudhanva-dev/issues/3) | Interactive primitives — TypewriterText, TerminalWindow, PixelStatBar, PixelSprite |
| [#4](https://github.com/sudhxnva/sudhanva-dev/issues/4) | LoadingScreen boot sequence |
| [#5](https://github.com/sudhxnva/sudhanva-dev/issues/5) | Hero + NavBar |
| [#6](https://github.com/sudhxnva/sudhanva-dev/issues/6) | About + Experience sections |
| [#7](https://github.com/sudhxnva/sudhanva-dev/issues/7) | Projects + Skills sections |
| [#8](https://github.com/sudhxnva/sudhanva-dev/issues/8) | Education + Contact + final page assembly |
| [#9](https://github.com/sudhxnva/sudhanva-dev/issues/9) | Polish — mobile, light theme, a11y, metadata |

### Issue Dependencies
```
#1 (primitives) → #3 (interactive primitives) → #4 (LoadingScreen)
#2 (hooks)      → #3, #5
#4, #5          → #6, #7, #8
#8              → #9
```

---

## Technical Gotchas

1. **`motion` not `framer-motion`** — Import from `"motion/react"`, not `"framer-motion"`
2. **`AnimatePresence` needs `key`** — `<LoadingScreen key="loading" />` required for exit animation
3. **Glass card + `overflow: hidden`** — Never combine; use `overflow: clip` if needed (WebKit)
4. **`-webkit-backdrop-filter`** — Always include alongside `backdrop-filter` for Safari
5. **`"use client"` directive** — Required on any component using hooks or motion; `layout.tsx` and `page.tsx` start as Server Components
6. **Press Start 2P size** — Max 16px; large sizes are unreadable. Subset to `latin` only.
7. **Pixel sprite performance** — Use `will-change: transform` on sprite containers (50+ box-shadows need GPU compositing)
8. **`useTypewriter` cleanup** — Must return `clearInterval` to prevent React 19 strict mode double-fire
9. **Tailwind v4** — Uses `@theme` block in `globals.css`; no `tailwind.config.ts` required for token definitions
10. **Mobile pixel borders** — Add `transform: translateZ(0)` to pixel-bordered elements to prevent hairline corner gaps on retina displays

---

## Verification Checklist

- [ ] `npm run dev` — loading screen boots and exits cleanly
- [ ] Boot sequence: all terminal lines appear sequentially, CRT exit fires
- [ ] Hero section: letter stagger reveals correctly, typewriter cycles through roles
- [ ] Scroll through all sections: `whileInView` animations trigger once each
- [ ] Skills section: stat bars animate from 0 on scroll entry
- [ ] Theme toggle: dark/light switch applies correctly across all sections
- [ ] NavBar active state: updates as user scrolls between sections
- [ ] Mobile (375px): all sections stack correctly, no horizontal overflow
- [ ] DevTools > Rendering > "Emulate CSS prefers-reduced-motion: reduce" — animations skip gracefully
- [ ] Lighthouse: no layout shift, fonts loaded with `display: swap`
