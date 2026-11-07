# eliseu.angelos — site pessoal (identidade EXECUTIVE DIGITAL)

Site estático (HTML + CSS + JavaScript puros), pronto para o GitHub Pages. Sem build nem dependências.

## Estrutura
- `index.html` — somente a estrutura e o conteúdo.
- `assets/css/main.css` — importa os módulos: reset, variables, base, typography, layout, components, sections, themes, responsive, print.
- `assets/js/` — `theme.js` (tema, carregado no `<head>`), `navigation.js`, `animations.js`, `print.js`, `main.js` (loading e rodapé).
- `assets/icons/` — `favicon.svg`, `brand-symbol.svg` (asas + ponto, inspirado no nick eliseu.angelos) e `apple-touch-icon.png`.

## Temas
Os dois temas usam variáveis CSS semânticas (`--color-background`, `--color-surface`, `--color-primary`, `--color-accent`...). O claro fica em `variables.css`; o escuro, em `themes.css`. A escolha é salva em `localStorage` e, na primeira visita, segue o tema do dispositivo.

## Fontes
Inter e IBM Plex Mono vêm do Google Fonts (único recurso externo, com fontes de sistema como reserva). Para hospedar localmente, coloque os arquivos em `assets/fonts/` e troque o `<link>` por `@font-face`.

## Publicação
Envie o conteúdo desta pasta para a raiz do repositório `eliseuangelos.github.io` (Settings → Pages → branch `main`, pasta `/ (root)`).
