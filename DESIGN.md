# Design System: Regulator Dashboard (Food Supply Intelligence)

## 1. Overview & Creative North Star: "The Orchestrated Lens"
In the complex world of global food supply chains, noise is the enemy. This design system moves away from the "generic dashboard" aesthetic, adopting a Creative North Star called **"The Orchestrated Lens."**
The goal is to present high-density data not as a cluttered spreadsheet, but as a curated editorial experience. We achieve this through **Intentional Asymmetry**—where large-scale map views or data visualizations are balanced by narrow, high-density control rails—and **Tonal Depth**, replacing traditional lines with shifts in surface color to create a UI that feels architectural and authoritative.

---

## 2. Colors & Surface Architecture
The palette is rooted in a deep, institutional blue (`#00488d`), providing a sense of stability. Functional colors are used sparingly as "signals" against a calm, neutral backdrop.

### Core Palette
- **Primary:** `#00488d`
- **Primary Container:** `#005fb8`
- **Background:** `#f7f9ff` (Base Layer)
- **Surface Lowest:** `#ffffff` (Interactive Cards)
- **Surface Low:** `#f1f4fa` (Secondary Workspace/Sidebars)
- **Surface Highest:** `#dfe3e8` (Active Data Modules)

### Functional / Status Colors
- **Surplus (Secondary):** `#486176` – A sophisticated slate-blue for "balanced" (saves green for extreme surplus).
- **Shortage (Error):** `#ba1a1a` – High contrast against surface.
- **Warning (Tertiary):** `#8b1f1b` – A deep, "oxblood" red-yellow tone for serious alerts that require professional attention.

### The "No-Line" Rule
To achieve a premium, custom feel, **1px solid borders are prohibited for sectioning.** Structural boundaries must be defined solely through background color shifts.
- **Glass & Gradient:** For floating map controls or overlays, use **Glassmorphism** (`surface_container_lowest` at 80% opacity with a `backdrop-blur` of 12px).
- For primary CTAs, apply a subtle linear gradient from `primary` to `primary_container`.

---

## 3. Typography: Editorial Precision
The typography system uses two distinct sans-serifs (loaded via Google Fonts) to balance technical clarity with a high-end feel.

*   **Display & Headlines (Manrope):** Used for top-level metrics and page titles (e.g., `text-xl font-bold font-['Manrope']`). Manrope’s geometric yet modern construction provides an "authoritative curator" voice.
*   **Body & Labels (Inter):** Used for all data points, tables, and functional UI (e.g., `font-['Inter'] text-sm`). Inter is optimized for high-density readability and numerical alignment.

---

## 4. Icons
- **Icon Library:** Material Symbols Outlined (Google Fonts)
- **Usage:** Inserted via `<span class="material-symbols-outlined">icon_name</span>`.
- **Styling:** Often paired with `font-variation-settings: 'FILL' 1` for filled active states, or `0` for inactive/standard outlines.

---

## 5. Charts & Data Visualization
- **Style:** Data is primarily represented via high-density typographic tables and large display numbers (e.g., `1.4M Tons`).
- **Visuals:** Asymmetric Grids are used. If a map or chart is on the left (8 columns), high-density data is put on the right (4 columns) to create a "command center" feel.
- **Data Tables & Lists:** No vertical or horizontal dividers. Use a vertical whitespace between rows and a row background change on hover.

---

## 6. Spacing & Rhythm
Rhythm is dictated by a **0.2rem base unit**, utilizing Tailwind's spacing scale:
- **Internal Component Padding:** `0.5rem` (Tailwind `p-2` / `spacing-2.5`)
- **Component-to-Component Gap:** `1.1rem` (Tailwind `gap-4` or `gap-5`)
- **Section Margins:** `3.5rem` (Tailwind `mb-14` or `spacing-16`)

By strictly adhering to these increments, the dashboard feels mathematically balanced, reinforcing the "Intelligence" aspect of the platform.
