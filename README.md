# (TBD) Restaurant Website

# Member

- Sky
- Shuya

# Color Palette

- ![#4E0014](https://placehold.co/15x15/4E0014/4E0014.png) `#4E0014`
- ![#E63946](https://placehold.co/15x15/E63946/E63946.png) `#E63946`
- ![#F9E4DD](https://placehold.co/15x15/F9E4DD/F9E4DD.png) `#F9E4DD`
- ![#F1FAEE](https://placehold.co/15x15/F1FAEE/F1FAEE.png) `#F1FAEE`
- ![#A8DADC](https://placehold.co/15x15/A8DADC/A8DADC.png) `#A8DADC`
- ![#457B9D](https://placehold.co/15x15/457B9D/457B9D.png) `#457B9D`
- ![#1D3557](https://placehold.co/15x15/1D3557/1D3557.png) `#1D3557`

# Architecture

```shell
.
├── index.html
├── about.html
├── access.html
├── menu.html
├── css
│  ├── foundation # The Foundation layer defines the defaults. (e.g. bg-color, fonts, media queries)
│  │  ├── _base.scss
│  │  ├── _global.scss
│  │  └── _reset.scss
│  ├── layout # Large common containers (e.g. header area, main contents area, sidebar and footer.)
│  │  ├── _footer.scss
│  │  ├── _header.scss
│  │  └── _main.scss
│  ├── object # All visual patterns that repeat within a project.
│  │  ├── component # Small scale modules as patterns for re-use.
│  │  ├── project # Unique to the project which consists of several components and other elements.
│  │  │  ├── _about.scss
│  │  │  ├── _access.scss
│  │  │  ├── _home.scss
│  │  │  └── _menu.scss
│  │  └── utility # Simple styles used to adjust minimal style changes that are difficult to or not appropriate to define in the Object modifiers of Component and Project layer.
│  ├── style.css
│  ├── style.css.map
│  └── style.scss
├── img
│  ├── main
│  ├── about
│  ├── access
│  ├── menu
│  ├── svg
│  ├── favicon.ico
│  ├── logo-512x512.png
│  └── tris2.png
├── js
│  └── index.js
└── README.md
```
