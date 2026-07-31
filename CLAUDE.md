# CLAUDE.md – wissmann.werbung

Diese Datei steuert, wie KI-Assistenten (Claude Code) an diesem Projekt arbeiten.
**Kernregel: Niemals direkt auf `main` committen.** Jede Änderung läuft über einen
Branch und einen Pull Request, den *der Nutzer* merged.

---

## Projekt

Statische Website (reines HTML/CSS/JS, **kein Build-Schritt**) für die Werbeagentur
wissmann.werbung, Embrach ZH.

| | |
|---|---|
| GitHub-Repo | `kraeki/wissmannwerbung.ch` |
| Default-/Production-Branch | `main` |
| Hosting | Netlify-Projekt `wissmannwerbung` |
| Production-URL | https://wissmannwerbung.netlify.app |

### Dateistruktur
```
index.html · impressum.html · datenschutz.html   Seiten
css/style.css                                     Stylesheet
js/main.js                                        Mobile-Nav & Footer-Jahr
img/                                              Logo & Favicon
DESIGN.md · styleguide.html                       Design-System (Farben, Fonts, Tokens)
netlify.toml                                      Deploy-Konfiguration
```

---

## Deployment-Pipeline (Git-basiert, kontinuierlich)

Netlify ist mit dem GitHub-Repo verknüpft. Deploys passieren **automatisch** durch
Git-Ereignisse – es wird *nicht* manuell per CLI hochgeladen.

1. **Branch pushen** → Netlify baut einen **Branch-Deploy**
   `https://<branch>--wissmannwerbung.netlify.app`
2. **Pull Request öffnen** → Netlify baut einen **Deploy Preview** und postet die URL
   als Status/Kommentar am PR:
   `https://deploy-preview-<PR-Nummer>--wissmannwerbung.netlify.app`
3. **PR nach `main` mergen** → Netlify baut **Production** → live auf
   `https://wissmannwerbung.netlify.app`

Merge = Go-Live. Nichts weiter nötig.

---

## Pflicht-Workflow für jede Änderung

> Diese Schritte sind verbindlich. Bei jeder inhaltlichen/gestalterischen Änderung
> an der Website ist so vorzugehen.

```bash
# 1. Immer frisch von main abzweigen
git checkout main
git pull origin main
git checkout -b <typ>/<kurzbeschreibung>     # z.B. feat/kontaktformular, fix/logo-mobil

# 2. Änderungen umsetzen und committen
git add -A
git commit -m "Kurze, klare Beschreibung"

# 3. Branch pushen (löst Netlify Branch-Deploy aus)
git push -u origin <typ>/<kurzbeschreibung>

# 4. Pull Request gegen main öffnen (löst Netlify Deploy Preview aus)
gh pr create --base main --fill
```

Danach:
- **KI/Assistent:** hier stoppen. Die Deploy-Preview-URL aus dem PR melden und den
  Nutzer um Review/Merge bitten.
- **Nutzer:** Preview prüfen und den PR selbst mergen → Änderung geht live.

### Branch-Namensschema
`feat/…` neues Feature · `fix/…` Fehlerbehebung · `content/…` Textänderung ·
`design/…` Gestaltung · `chore/…` Wartung/Konfiguration.

---

## Regeln (Do / Don't)

**Do**
- Immer Branch + PR. `main` bleibt jederzeit deploybar.
- Vor dem Abzweigen `git pull origin main`.
- Design an `DESIGN.md` ausrichten: Marken-Orange `#FF7200`, Schriften **Arimo**
  (Body) und **Droid Sans** (Headlines).
- Vor dem Push lokal prüfen: `python3 -m http.server 8000` → http://localhost:8000

**Don't**
- ❌ Nicht direkt auf `main` committen oder nach `main` pushen.
- ❌ Keine manuellen Netlify-CLI-Uploads für reguläre Änderungen (umgeht Preview & Review).
- ❌ PRs nicht selbst mergen – das macht der Nutzer nach Review der Preview.
- ❌ Farben/Fonts nicht ad hoc ändern; erst `DESIGN.md` anpassen.

---

## Referenzen
- Design-System & Tokens: `DESIGN.md`
- Visuelle Vorschau: `styleguide.html`
- Netlify-Dashboard: https://app.netlify.com/projects/wissmannwerbung
