# Yumeng Wang's Academic Homepage

Static GitHub Pages site for `https://ymwang-cutefish.github.io/`.

## Local preview

```powershell
python -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## Structure

- `index.html`: academic homepage
- `papers/hpgnn/index.html`: HPGNN paper page
- `assets/css/style.css`: shared responsive styles
- `assets/js/main.js`: mobile navigation and citation copy interaction
- `assets/images/`: portrait and figures extracted from the supplied PDFs
- `assets/papers/`: downloadable paper PDF

## Common edits

- Update the biography, sidebar links, publication list, or experience in `index.html`.
- Update the HPGNN project page in `papers/hpgnn/index.html`.
- Replace images in `assets/images/` while keeping the existing filenames, or update their paths in the HTML.
- Change colors, spacing, typography, or responsive behavior in `assets/css/style.css`.

After editing, commit and push to `main`. GitHub Pages deploys the update automatically.
