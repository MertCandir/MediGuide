---
name: Serene Health
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fa'
  on-surface: '#111c2c'
  on-surface-variant: '#424752'
  inverse-surface: '#263142'
  inverse-on-surface: '#ebf1ff'
  outline: '#727783'
  outline-variant: '#c2c6d4'
  surface-tint: '#005db6'
  primary: '#00478d'
  on-primary: '#ffffff'
  primary-container: '#005eb8'
  on-primary-container: '#c8daff'
  inverse-primary: '#a9c7ff'
  secondary: '#006b5b'
  on-secondary: '#ffffff'
  secondary-container: '#78f8dd'
  on-secondary-container: '#007261'
  tertiary: '#43484c'
  on-tertiary: '#ffffff'
  tertiary-container: '#5b6063'
  on-tertiary-container: '#d6dade'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#a9c7ff'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#00468c'
  secondary-fixed: '#78f8dd'
  secondary-fixed-dim: '#59dbc1'
  on-secondary-fixed: '#00201a'
  on-secondary-fixed-variant: '#005144'
  tertiary-fixed: '#dfe3e7'
  tertiary-fixed-dim: '#c3c7cb'
  on-tertiary-fixed: '#171c1f'
  on-tertiary-fixed-variant: '#43474b'
  background: '#f9f9ff'
  on-background: '#111c2c'
  surface-variant: '#d8e3fa'
typography:
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 20px
  margin: 24px
---

## Brand & Style
The design system is anchored in the principles of empathy, clarity, and clinical precision. It targets a demographic seeking both professional medical reliability and a stress-reducing digital environment. 

The aesthetic follows a **Modern Corporate** style with a strong lean toward **Minimalism**. It prioritizes heavy whitespace to reduce cognitive load—a critical factor in healthcare environments. The interface uses high-quality typography and soft organic shapes to humanize the data-heavy nature of health records and diagnostics.

## Colors
The palette is designed to evoke tranquility and trust.
- **Primary (Medical Blue):** A deep, authoritative blue used for primary actions and brand recognition.
- **Secondary (Calming Green):** A soft, mint-leaning green used for success states, wellness tracking, and secondary highlights.
- **Tertiary (Soft White/Ice):** Used for background surfaces to provide a crisp, sterile (but not cold) environment.
- **Neutrals:** A range of slate grays that maintain readability without the harshness of pure black.

Use subtle color washes of the secondary green behind charts or illustrations to reinforce a feeling of vitality.

## Typography
The system utilizes a dual-font approach to balance personality with utility. **Manrope** is used for headlines to provide a modern, friendly, and refined character. **Inter** is the workhorse for body text and data, chosen for its exceptional legibility in dense medical contexts. 

Maintain generous line heights (1.5+) for all body copy to ensure accessibility for users who may be experiencing visual fatigue or stress.

## Layout & Spacing
The layout follows a **Mobile-First** philosophy, utilizing a flexible 12-column grid that collapses to a single column on small devices. On desktop, content is contained within a maximum width of 1280px to prevent excessive line lengths.

Spacing is governed by an 8px linear scale. "Plenty of whitespace" is achieved by defaulting to the `lg` (48px) and `xl` (80px) tokens for vertical section margins, ensuring the UI never feels cluttered or urgent.

## Elevation & Depth
Depth is communicated through **Ambient Shadows** and **Tonal Layers**. 
- Surfaces use extremely soft, diffused shadows (Blur: 30px, Opacity: 4%) with a slight blue tint (`#005EB8`) to anchor them.
- Avoid heavy borders. Instead, use subtle shifts in background color (e.g., Ice White on Pure White) to differentiate sections.
- For interactive elements, a slight "lift" (increased shadow spread) on hover provides tactile feedback without disrupting the clean aesthetic.

## Shapes
This design system embraces an "Organic-Geometric" shape language. All main containers, buttons, and cards must use a minimum radius of 20px. 
- Large containers (Cards): 24px - 32px.
- Interactive elements (Buttons): 20px or fully pill-shaped.
- Form inputs: 12px to maintain a slightly more structured feel while remaining approachable.

## Components
- **Buttons:** Primary buttons are solid Medical Blue with white text and 24px padding. Secondary buttons use a Secondary Green ghost style with a 2px border.
- **Cards:** Pure white backgrounds with the standard 24px-32px radius and ambient blue-tinted shadows. Internal padding should never be less than 24px.
- **Inputs:** Soft-gray backgrounds with 12px corners. The focus state uses a 2px Medical Blue ring.
- **Chips:** Highly rounded (pill-shaped) with low-saturation versions of the primary and secondary colors for categorization.
- **Health-Specific:** 
  - **Progress Rings:** Used for health goals, utilizing the Calming Green with a thick stroke and rounded caps.
  - **Status Indicators:** Use soft "glowing" dots (small shadow) for live appointment or heart rate statuses.
  - **Iconography:** Linear, 2px stroke icons with rounded terminals to match the shape language of the UI.