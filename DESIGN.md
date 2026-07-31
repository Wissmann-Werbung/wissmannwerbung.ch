# Design System — Wissmann Werbung

Extrahiert von **https://wissmannwerbung.ch** (WordPress / Divi-Theme mit Child-Theme).
Stand: 2026-07-31

Wissmann Werbung ist eine Schweizer Werbeagentur (Print & Digital: Logo-Design,
Webprojekte, Fahrzeug-/Schaufensterbeschriftung, Flyer, Fotografie). Der Auftritt ist
sauber, sachlich und professionell mit einem kräftigen Orange als Signalfarbe auf
überwiegend weissem Grund.

---

## 1. Farben (Color Tokens)

### Marke / Akzent
| Token | Hex | Verwendung |
|-------|-----|-----------|
| `--color-primary` | `#FF7200` | Signal-Orange: Buttons, Rahmen, runde Icons, Hervorhebungen, Überschriften-Akzente |
| `--color-primary-alt` | `#FF6900` | Orange-Variante (Blocks/Hover) |
| `--color-link` | `#2EA3F2` | Links (Divi-Blau) |

### Neutral
| Token | Hex | Verwendung |
|-------|-----|-----------|
| `--color-black` | `#000000` | Text, Überschriften, dunkle Sektionen |
| `--color-white` | `#FFFFFF` | Haupt-Hintergrund, Text auf dunkel |
| `--color-text` | `#333333` | Fliesstext |
| `--color-text-muted` | `#666666` | Sekundärtext, Bottom-Nav-Links |
| `--color-text-subtle` | `#999999` | Placeholder, Hilfstext |
| `--color-border` | `#DDDDDD` | Rahmen, Trennlinien |
| `--color-border-light`| `#EEEEEE` | Feld-Hintergründe, feine Linien |
| `--color-surface-alt` | `#F3F3F3` | Abwechselnder Sektions-Hintergrund |
| `--color-slate` | `#AEB5BA` | Blau-graue Sektionsfläche |
| `--color-footer-bg` | `#222222` | Footer-Hintergrund |
| `--color-footer-nav` | `rgba(255,255,255,0.05)` | Footer-Navigation |

### Sektions-Hintergründe (wie auf der Seite verwendet)
`#FFFFFF` (Standard) · `#FF7200` (Akzent-Sektion) · `#AEB5BA` (Ruhefläche) · `#000000` (Kontrast)

---

## 2. Typografie

| Rolle | Font-Stack | Hinweis |
|-------|-----------|---------|
| Fliesstext / UI | `'Arimo', Helvetica, Arial, Lucida, sans-serif` | Haupt-Schrift (via Google Fonts geladen) |
| Überschriften | `'Droid Sans', sans-serif` | Headline-Schrift |
| Alternativ | `'Verdana', Helvetica, Arial, Lucida, sans-serif` | vereinzelt |

- Google Font geladen: **Arimo** (Gewichte 400, 500, 600, 700 + Kursiv).
- Überschriften teils in **GROSSBUCHSTABEN** (z. B. „WEBPROJEKTE", „LOGO-DESIGN").
- Kontakt-Titel (`h1`) ca. **26px**.

### Gewichte
`400` Normal · `500` Medium · `600` Semibold (Nav) · `700` Bold (Links/Headlines)

---

## 3. Komponenten

### Buttons
- Hintergrund `#FF7200`, Text weiss `#FFFFFF`.
- Rechteckig bis leicht gerundet; Padding ~ `14px 4%`.
- Formular-Button „Senden".

### Runde Icons / Badges
- Kreis (`border-radius: 100%`), Padding `25px`, Hintergrund `#FF7200`.

### Navigation
- Horizontale Hauptnavigation: **Agentur · Team · Kunden · Kontakt · DSGVO**.
- Anker-Links auf Seitenabschnitte (`#team`, `#kunden`, `#kontakt`).
- Nav-Gewicht `600`.

### Formularfelder
- Hintergrund `#EEEEEE`, Text `#999999`, randlos (`border-width: 0`).

### Footer
- Hintergrund `#222222`, Links weiss `#FFFFFF`, Widget-Titel in `#2EA3F2`.
- Bottom-Nav auf `rgba(255,255,255,0.05)`, Links `#666`/`#BBB`.
- Firmendetails + Social (Facebook-Icon).

---

## 4. Layout

- Zentriertes Logo im Header (`LOGO_460px.jpg`, Breite 460px).
- Mehrere gestapelte Sektionen (One-Pager-Struktur).
- Service-Showcase mit beschreibendem Text.
- Portfolio-Galerie (Kundenlogos, Webprojekte, Beschriftungen, Flyer, Fotografie).
- Kontaktformular unten, danach Footer.

---

## 5. CSS Custom Properties (kopierbar)

```css
:root {
  /* Marke */
  --color-primary:      #FF7200;
  --color-primary-alt:  #FF6900;
  --color-link:         #2EA3F2;

  /* Neutral */
  --color-black:        #000000;
  --color-white:        #FFFFFF;
  --color-text:         #333333;
  --color-text-muted:   #666666;
  --color-text-subtle:  #999999;
  --color-border:       #DDDDDD;
  --color-border-light: #EEEEEE;
  --color-surface-alt:  #F3F3F3;
  --color-slate:        #AEB5BA;
  --color-footer-bg:    #222222;

  /* Typografie */
  --font-body:    'Arimo', Helvetica, Arial, Lucida, sans-serif;
  --font-heading: 'Droid Sans', sans-serif;
  --font-alt:     'Verdana', Helvetica, Arial, Lucida, sans-serif;

  --fw-normal: 400;
  --fw-medium: 500;
  --fw-semibold: 600;
  --fw-bold: 700;

  /* Radius */
  --radius-round: 100%;
}
```

## 6. Design Tokens (JSON)

```json
{
  "color": {
    "primary": "#FF7200",
    "primaryAlt": "#FF6900",
    "link": "#2EA3F2",
    "black": "#000000",
    "white": "#FFFFFF",
    "text": "#333333",
    "textMuted": "#666666",
    "textSubtle": "#999999",
    "border": "#DDDDDD",
    "borderLight": "#EEEEEE",
    "surfaceAlt": "#F3F3F3",
    "slate": "#AEB5BA",
    "footerBg": "#222222"
  },
  "font": {
    "body": "'Arimo', Helvetica, Arial, Lucida, sans-serif",
    "heading": "'Droid Sans', sans-serif",
    "alt": "'Verdana', Helvetica, Arial, Lucida, sans-serif"
  },
  "fontWeight": { "normal": 400, "medium": 500, "semibold": 600, "bold": 700 }
}
```
