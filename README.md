# Sebastian Höger — akademische Seite

Statische Visitenkarte für GitHub Pages. Liegt **außerhalb** des Forschungsarchivs, damit Entwürfe nicht mitveröffentlicht werden.

Vorschau lokal: `index.html` im Browser öffnen.

## Username

`Asti1982` nicht in `sebastianhoeger` umbenennen. Die technischen Repos (Agent-, Crypto-, Toolprojekte) würden sonst unter dem Klarnamen stehen.

`shoeger` ist auf GitHub bereits vergeben.

`sebastianhoeger` war beim Anlegen frei. Das ist der richtige akademische Name: klar, findbar, passend zur URL `sebastianhoeger.github.io`.

Vorgehen:

1. Neues GitHub-Konto **sebastianhoeger** anlegen (nicht das bestehende umbenennen).
2. Neues leeres Repo **sebastianhoeger.github.io** erstellen.
3. Dieses Verzeichnis dorthin schieben.

`Asti1982` kann für technische Experimente bleiben. Auf der Philosophieseite ist dieser Name nicht verlinkt.

Falls vorerst nur das bestehende Konto genutzt werden soll: Repo `Asti1982.github.io` anlegen. Die öffentliche Adresse wäre dann `https://asti1982.github.io` — für Gutachten und DVjs die schwächere Lösung.

## Veröffentlichen

Im Verzeichnis:

```powershell
git init
git add .
git commit -m "Akademische Visitenkarte."
git branch -M main
git remote add origin https://github.com/sebastianhoeger/sebastianhoeger.github.io.git
git push -u origin main
```

Danach in GitHub: Settings → Pages → Source: `main`, Ordner `/`.

Nach wenigen Minuten: `https://sebastianhoeger.github.io`

## Anpassen

- Foto: `portrait.jpg` (quadratisch, etwa 800 px) hier ablegen und in `index.html` das `<img>` einkommentieren.
- E-Mail: in `index.html` das `mailto:` ändern, falls nicht Outlook verwendet werden soll.
- Heidelberg-Link zeigt auf die Sammelseite der Dissertationsvorhaben (dort der Eintrag Höger). Eine eigene Personen-HTML des Seminars gibt es derzeit nicht.
- DVjs erst nach Annahme in die Publikationsliste setzen, nicht schon bei Einreichung.
