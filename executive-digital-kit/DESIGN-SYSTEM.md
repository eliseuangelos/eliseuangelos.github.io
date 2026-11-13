# EXECUTIVE DIGITAL — Design System e Guia de Implementação

**Versão:** 2.0  
**Idioma:** Português (Brasil)  
**Responsável:** Eliseu Fernandes Laurindo  
**Site oficial:** <https://eliseuangelos.github.io/>  
**Guia visual:** [`ESTILO-VISUAL.md`](./ESTILO-VISUAL.md)

---

## 1. Objetivo e regras de implementação

Este documento transforma a identidade EXECUTIVE DIGITAL em padrões técnicos reutilizáveis. Deve ser consultado junto com `ESTILO-VISUAL.md` antes de implementar ou reformular a interface de qualquer projeto.

### 1.1. Regras de arquitetura

1. Usar tokens CSS semânticos como fonte de verdade das cores, tipografia, espaçamento, raios, sombras e movimento.
2. Componentes de interface devem consumir tokens; evitar cores avulsas espalhadas pelo CSS.
3. Separar valores de tema dos estilos estruturais dos componentes.
4. Implementar DIA e NOITE completos, com `data-theme="light"` e `data-theme="dark"`.
5. Integrar o componente DAY & NIGHT EXPERIENCE original. Não criar outro alternador concorrente.
6. Preservar a arquitetura e as funcionalidades já existentes no projeto.
7. Adaptar caminhos e organização ao framework ou à hospedagem. A estrutura deste documento é uma referência, não uma obrigação de fragmentar arquivos.
8. Não declarar que algo foi validado sem executar os testes correspondentes.

## 2. Fontes oficiais e rastreabilidade

### 2.1. Guia original

`estilo-visual-backup.txt` — base de identidade EXECUTIVE DIGITAL, versão 1.0. A paleta, os princípios, a tipografia e as regras visuais foram preservados e consolidados nos dois documentos deste kit.

### 2.2. Ativos institucionais

Repositório de origem e commit de referência:

<https://github.com/eliseuangelos/eliseuangelos.github.io/tree/9021a56d3219b70d78a0ec5c665a0db17155da7d/assets/icons>

Arquivos:

- `assets/icons/brand-symbol.svg`
- `assets/icons/favicon.svg`
- `assets/icons/apple-touch-icon.png`

Preferir uma cópia local dos arquivos nos projetos para que cada publicação seja autossuficiente. Ao atualizar os ativos, conferir a origem oficial e registrar o novo commit.

### 2.3. Componente DAY & NIGHT EXPERIENCE

Repositório: <https://github.com/eliseuangelos/day-night-experience>  
Demonstração: <https://eliseuangelos.github.io/day-night-experience/>  
Construtor: <https://eliseuangelos.github.io/day-night-experience/construtor/>  
Manual: <https://github.com/eliseuangelos/day-night-experience/blob/main/docs/COMO-USAR.md>  
README técnico: <https://github.com/eliseuangelos/day-night-experience/blob/main/README.md>

A documentação consultada descreve o componente distribuível em `component/day-night.js` e `component/day-night.css`, sem necessidade de framework ou build para a integração básica. A API documentada inclui `DayNight.init()` e os modos `button` e `cinematic`, além de configurações de velocidade, rotação, nuvens, botão, persistência, chave de armazenamento e preferência do sistema.

**Controle de versão:** em produção, prefira hospedar os arquivos do componente dentro do próprio projeto, ou referenciar um release/commit imutável que tenha sido confirmado no repositório. Não depender de `main` como versão de produção. Não presumir que exista uma tag específica: verificar a release/tag antes de utilizá-la.

## 3. Estrutura de arquivos sugerida

Para um site estático de pequeno ou médio porte:

```text
/
├── index.html
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   ├── tokens.css
│   │   ├── theme-day.css
│   │   ├── theme-night.css
│   │   ├── reset.css
│   │   ├── base.css
│   │   ├── typography.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   └── responsive.css
│   ├── js/
│   │   ├── theme-init.js
│   │   ├── theme-meta.js
│   │   └── main.js
│   ├── vendor/
│   │   └── day-night/
│   │       ├── day-night.js
│   │       └── day-night.css
│   ├── icons/
│   │   ├── brand-symbol.svg
│   │   ├── favicon.svg
│   │   └── apple-touch-icon.png
│   ├── images/
│   └── fonts/
└── README.md
```

Adapte à arquitetura real. Não criar arquivos vazios, não duplicar regras e não mover código sem benefício. Em projetos React, Vue, Angular, Svelte ou similares, utilizar a estrutura idiomática do framework e preservar os mesmos tokens e contratos visuais.

## 4. Tokens CSS oficiais

A base deve declarar nomes semânticos estáveis. Os componentes não devem conhecer os valores hexadecimais diretamente.

### 4.1. Tokens compartilhados e tema DIA

```css
:root,
:root[data-theme="light"] {
  color-scheme: light;

  /* Cores semânticas */
  --color-background: #F4F7FB;
  --color-surface: #FFFFFF;
  --color-surface-secondary: #E9EFF5;
  --color-text: #162638;
  --color-text-secondary: #526579;
  --color-border: #D5DEE8;
  --color-primary: #1D4263;
  --color-action: #2563EB;
  --color-accent: #0B7E82;
  --color-focus: #2563EB;
  --color-shadow: 0 10px 30px rgba(22, 38, 56, 0.08);
  --color-theme-meta: #F4F7FB;

  /* Tipografia */
  --font-sans: "Inter", "Manrope", system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mono: "IBM Plex Mono", "SFMono-Regular", Consolas, monospace;

  /* Dimensões e layout */
  --content-width: 1180px;
  --header-height: 76px;
  --page-gutter: 20px;

  /* Raios */
  --radius-small: 8px;
  --radius-medium: 12px;
  --radius-large: 18px;
  --radius-pill: 999px;

  /* Espaçamento — base de 4px */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;

  /* Movimento */
  --motion-fast: 180ms;
  --motion-standard: 280ms;
  --motion-emphasis: 420ms;
  --ease-standard: cubic-bezier(.2, .7, .2, 1);
}
```

### 4.2. Tema NOITE

```css
:root[data-theme="dark"] {
  color-scheme: dark;

  --color-background: #111C28;
  --color-surface: #1B2A3A;
  --color-surface-secondary: #24364A;
  --color-text: #EDF3F8;
  --color-text-secondary: #B7C5D3;
  --color-border: #3A4D60;
  --color-primary: #91B7D8;
  --color-action: #83B4FF;
  --color-accent: #68CBC2;
  --color-focus: #83B4FF;
  --color-shadow: 0 12px 32px rgba(0, 0, 0, 0.22);
  --color-theme-meta: #111C28;
}
```

Os valores de cada tema devem permanecer pareados por nome de token. Se um token semântico for adicionado, definir o valor nos dois temas antes de utilizá-lo.

### 4.3. Estados de interface

Projetos podem acrescentar tokens como `--color-success`, `--color-warning`, `--color-danger` e `--color-info`. Esses valores não estão definidos na paleta institucional original; devem ser escolhidos conforme o contexto, manter significado consistente entre temas e passar por teste de contraste. Não atribuir valores arbitrários sem validar.

## 5. Organização das folhas de estilo

A responsabilidade de cada módulo deve ser clara:

| Arquivo | Responsabilidade |
|---|---|
| `tokens.css` | Tipografia, dimensões, raios, espaçamentos, movimento e tokens compartilhados. |
| `theme-day.css` | Valores de cores e superfícies do tema DIA. |
| `theme-night.css` | Valores correspondentes do tema NOITE. |
| `reset.css` | Normalização mínima e previsível. |
| `base.css` | Regras globais, corpo, links, seleção e elementos fundamentais. |
| `typography.css` | Escalas, pesos, headings e textos. |
| `layout.css` | Containers, grids, seções e estruturas. |
| `components.css` | Botões, cartões, formulários, menus, modais e demais componentes. |
| `responsive.css` | Ajustes por breakpoint. |
| `main.css` | Ponto de entrada e ordem de importação. |

Exemplo de entrada:

```css
@import url("tokens.css");
@import url("theme-day.css");
@import url("theme-night.css");
@import url("reset.css");
@import url("base.css");
@import url("typography.css");
@import url("layout.css");
@import url("components.css");
@import url("responsive.css");
```

Quando viável, carregar os dois temas na mesma folha para que a alternância seja imediata. O CSS estrutural deve consumir `var(--...)`, sem valores de cores fixos espalhados nos componentes.

## 6. Padrões de componentes

### 6.1. Base global

```css
html {
  color-scheme: light;
  background: var(--color-background);
  scroll-behavior: smooth;
}

html[data-theme="dark"] {
  color-scheme: dark;
}

body {
  margin: 0;
  min-width: 320px;
  background: var(--color-background);
  color: var(--color-text);
  font-family: var(--font-sans);
  line-height: 1.65;
  transition:
    background-color var(--motion-standard) var(--ease-standard),
    color var(--motion-standard) var(--ease-standard);
}

:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Avaliar a transição global de `body` no contexto do componente DAY & NIGHT: ela não deve competir com a animação cinematográfica, atrasar a mudança ou provocar flashes. Se o componente controla a transição, não criar uma segunda animação global conflitante.

### 6.2. Container e superfícies

```css
.container {
  width: min(100% - (2 * var(--page-gutter)), var(--content-width));
  margin-inline: auto;
}

.surface {
  color: var(--color-text);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-large);
  box-shadow: var(--color-shadow);
}

.surface-secondary {
  color: var(--color-text);
  background: var(--color-surface-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-medium);
}
```

### 6.3. Botões e campos

Os estados devem ser definidos para os dois temas. Não retirar outline sem substituição acessível. O hover deve ser moderado; disabled deve ter contraste e comportamento reconhecíveis. Campos precisam de label, instruções e mensagem de erro associada quando aplicável.

### 6.4. Responsividade

Utilizar breakpoints determinados pelo conteúdo, não por uma lista arbitrária de aparelhos. Testar menus, tabelas, formulários, cartões, rodapé e controle de tema. Evitar larguras fixas desnecessárias e rolagem horizontal involuntária.

## 7. Ativos de marca e caminhos no GitHub Pages

### 7.1. Uso recomendado

Copiar os três arquivos oficiais para `assets/icons/` do projeto, preservando o conteúdo original. Isso evita que o site fique dependente de outro repositório para carregar o favicon e o símbolo.

Exemplo de declarações HTML para um site publicado na raiz do domínio:

```html
<link rel="icon" type="image/svg+xml" href="/assets/icons/favicon.svg">
<link rel="apple-touch-icon" href="/assets/icons/apple-touch-icon.png">
```

Para um site de projeto publicado em subdiretório, inserir o prefixo real do repositório, por exemplo:

```html
<link rel="icon" type="image/svg+xml" href="/NOME-DO-REPOSITORIO/assets/icons/favicon.svg">
<link rel="apple-touch-icon" href="/NOME-DO-REPOSITORIO/assets/icons/apple-touch-icon.png">
```

Substituir `NOME-DO-REPOSITORIO` pelo nome real. Em frameworks, usar o mecanismo de `base path`/`public path` do projeto. Não copiar literalmente caminhos de exemplo sem confirmar a URL de implantação.

### 7.2. Símbolo no conteúdo

```html
<a class="brand" href="/" aria-label="Página inicial — Eliseu Fernandes Laurindo">
  <img
    src="/assets/icons/brand-symbol.svg"
    alt=""
    width="40"
    height="40"
  >
  <span>Nome do projeto</span>
</a>
```

O `alt` vazio é adequado quando o símbolo é decorativo e o link já possui nome acessível. Se o símbolo for a única identificação do link, fornecer um nome acessível no link. Ajustar `href` e `src` à base real do site.

## 8. Integração oficial do DAY & NIGHT EXPERIENCE

### 8.1. Princípio

Utilizar o componente mantido no repositório original de Eliseu Fernandes Laurindo. Não implementar um segundo sistema que também gerencie `data-theme`, `localStorage` ou o controle de alternância.

A referência atual do repositório documenta:

- `DayNight.init()` como ponto de inicialização.
- `mode: 'button'` ou `mode: 'cinematic'`.
- `speed: 'slow' | 'normal' | 'fast'` ou duração em milissegundos.
- `rotation` e `clouds` para a experiência cinematográfica.
- Configuração do botão por `button`.
- Persistência por `localStorage` e opção de chave `storageKey`.
- Respeito à preferência de tema do sistema por `respectSystem`.
- Aplicação do tema por `data-theme` por padrão.
- Suporte a `prefers-reduced-motion`.

Confirmar a API no README do repositório antes de usar opções adicionais ou atualizar arquivos do componente.

### 8.2. Arquivos e hospedagem

Em produção, preferir copiar os arquivos distribuíveis para `assets/vendor/day-night/`:

- `component/day-night.js` → `assets/vendor/day-night/day-night.js`
- `component/day-night.css` → `assets/vendor/day-night/day-night.css`

Registrar no projeto a origem, a data e o commit/release de onde foram copiados. Não substituir silenciosamente os arquivos durante uma atualização.

A documentação do projeto também apresenta a possibilidade de carregar o componente pela URL publicada no GitHub Pages ou por CDN com versão fixa. Quando utilizar uma URL externa, fixar release/commit real e confirmado; não usar `main` como referência de produção.

### 8.3. Ordem de carregamento

1. Declarar `meta theme-color` no `<head>`.
2. Executar o bootstrap anti-flash antes das folhas de estilo.
3. Carregar os tokens e os dois temas CSS.
4. Carregar o CSS do DAY & NIGHT.
5. Carregar o JavaScript distribuível do componente.
6. Inicializar `DayNight.init()` uma única vez, depois que o componente estiver disponível.

Exemplo de integração para HTML estático com arquivos locais:

```html
<head>
  <meta name="theme-color" content="#F4F7FB">
  <script src="assets/js/theme-init.js"></script>
  <link rel="stylesheet" href="assets/css/main.css">
  <link rel="stylesheet" href="assets/vendor/day-night/day-night.css">
</head>
<body>
  <!-- Conteúdo da aplicação -->

  <script src="assets/vendor/day-night/day-night.js"></script>
  <script>
    DayNight.init({
      mode: 'cinematic',
      speed: 'normal',
      rotation: true,
      clouds: true,
      button: {
        size: 48,
        position: 'top-right',
        offset: 16
      },
      persistence: true,
      storageKey: 'dn-theme',
      respectSystem: true
    });
  </script>
  <script src="assets/js/theme-meta.js"></script>
</body>
```

Este é um exemplo para site estático. Ajustar caminhos e inicialização a frameworks, CSP, roteamento e arquitetura reais. Não inicializar duas vezes se o componente já estiver integrado por outro módulo.

### 8.4. Modo completo e modo simplificado

- **Padrão recomendado:** `mode: 'cinematic'`, quando o contexto do projeto permitir a experiência visual completa.
- **Alternativa leve:** `mode: 'button'`, quando o objetivo for uma interface compacta, um ambiente de baixa complexidade visual ou quando a modalidade cinematográfica não for adequada.
- Respeitar o suporte interno a `prefers-reduced-motion`. Nunca forçar uma animação incompatível com a preferência do usuário.
- Manter os mesmos tokens, temas, persistência e significado de estado nos dois modos.
- Não adicionar um alternador próprio ao lado do componente original.

### 8.5. Tema e persistência

Os valores de tema usados no sistema são:

- DIA: `data-theme="light"`
- NOITE: `data-theme="dark"`
- Preferência persistida: `dn-theme`

O componente DAY & NIGHT deve ser a fonte de verdade do controle e da alternância. O bootstrap abaixo serve apenas para antecipar a escolha visual antes da primeira pintura; não deve criar um segundo mecanismo interativo ou uma segunda chave de armazenamento.

Conteúdo sugerido para `assets/js/theme-init.js`:

```js
(() => {
  const storageKey = 'dn-theme';
  const root = document.documentElement;
  let theme = null;

  try {
    const savedTheme = localStorage.getItem(storageKey);
    if (savedTheme === 'light' || savedTheme === 'dark') {
      theme = savedTheme;
    }
  } catch {
    // Armazenamento indisponível: utilizar a preferência do sistema.
  }

  if (!theme) {
    const prefersDark = window.matchMedia?.(
      '(prefers-color-scheme: dark)'
    ).matches;
    theme = prefersDark ? 'dark' : 'light';
  }

  root.setAttribute('data-theme', theme);
})();
```

Incluir esse arquivo no `<head>`, antes das folhas de estilo, sem `async` ou `defer`, para que a definição inicial aconteça antes da primeira pintura. O componente continua responsável pela alternância e pela persistência após a interação.

Não manter uma segunda chave local, como `theme`, `color-mode` ou similar, sem uma necessidade de migração claramente documentada.

### 8.6. Cor da barra do navegador (`theme-color`)

Manter a cor do navegador coerente com o tema ativo. Uma abordagem simples é observar a alteração de `data-theme` após o DOM estar disponível.

Conteúdo sugerido para `assets/js/theme-meta.js`:

```js
(() => {
  const root = document.documentElement;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) return;

  const updateThemeColor = () => {
    meta.setAttribute(
      'content',
      root.getAttribute('data-theme') === 'dark' ? '#111C28' : '#F4F7FB'
    );
  };

  updateThemeColor();

  const observer = new MutationObserver(updateThemeColor);
  observer.observe(root, {
    attributes: true,
    attributeFilter: ['data-theme']
  });
})();
```

Se o projeto já possuir um mecanismo equivalente, reutilizá-lo em vez de duplicá-lo. Verificar o comportamento em navegadores e plataformas alvo.

### 8.7. CSS dos temas e do componente

- Carregar os dois conjuntos de tokens ao mesmo tempo; deixar o seletor `data-theme` determinar os valores ativos.
- Não carregar um arquivo CSS diferente a cada clique, salvo necessidade comprovada.
- O CSS estrutural utiliza variáveis semânticas.
- Verificar conflitos entre `day-night.css` e os estilos da aplicação.
- Não editar o arquivo distribuível original para resolver conflito de estilos sem documentar a alteração. Preferir regras complementares na aplicação ou gerar uma configuração personalizada pelo construtor.
- Não criar animação de troca concorrente com o palco cinematográfico.

## 9. Créditos obrigatórios de desenvolvimento

Todos os projetos devem conter no rodapé a autoria institucional:

**Desenvolvido por Eliseu Fernandes Laurindo**  
<https://eliseuangelos.github.io/>

Também incluir o aviso de direitos autorais com ano dinâmico:

```html
<footer class="site-footer">
  <p>
    Desenvolvido por
    <a href="https://eliseuangelos.github.io/" target="_blank" rel="noopener noreferrer">
      Eliseu Fernandes Laurindo
    </a>
  </p>
  <p>
    © <span data-current-year></span> Eliseu Fernandes Laurindo.
    Todos os direitos reservados.
  </p>
</footer>
<script>
  document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
</script>
```

Ajustar o HTML ao framework, evitar abrir nova aba sem necessidade e aplicar estilos coerentes com os temas. O crédito deve constar em todas as páginas do projeto conforme a estrutura de layout compartilhado. Não remover créditos ou avisos de terceiros.

## 10. Tipografia, carregamento e performance

- Priorizar fontes locais ou estratégias eficientes de carregamento.
- Não bloquear o conteúdo por carregamento de fontes decorativas.
- Usar fallback adequado.
- Otimizar imagens e dimensões.
- Aplicar lazy loading fora da primeira dobra quando apropriado.
- Evitar bibliotecas desnecessárias.
- Não adicionar framework apenas para implementar tokens, um tema ou uma transição simples.
- Verificar console, recursos 404, CLS e comportamento em conexão móvel.
- A animação DAY & NIGHT não deve bloquear o acesso à aplicação nem exigir backend.

## 11. Segurança, compatibilidade e manutenção

- Usar scripts locais quando apropriado e controlar versões de recursos externos.
- Não inserir scripts de terceiros sem necessidade.
- Respeitar a Content Security Policy existente; se uma política bloquear scripts inline, mover os trechos para arquivos externos autorizados.
- Tratar indisponibilidade de `localStorage` sem quebrar a página.
- Evitar duplicidade de listeners, observadores e inicializações.
- Manter os arquivos do componente original identificáveis e versionados.
- Documentar alterações locais feitas sobre a distribuição original.

## 12. Checklist de aceitação técnica

### Estrutura e identidade

- [ ] Os documentos `ESTILO-VISUAL.md` e `DESIGN-SYSTEM.md` foram consultados.
- [ ] Os ativos oficiais foram copiados ou referenciados corretamente.
- [ ] Os caminhos funcionam na URL real de publicação.
- [ ] O favicon SVG e o Apple Touch Icon foram configurados.
- [ ] A arquitetura existente foi preservada sempre que possível.

### CSS e temas

- [ ] Tokens semânticos são a fonte de verdade.
- [ ] Os dois temas declaram o mesmo conjunto de tokens.
- [ ] O tema DIA é completo.
- [ ] O tema NOITE é completo e não usa preto puro predominante.
- [ ] Todos os componentes relevantes foram testados nos dois temas.
- [ ] Os contrastes reais foram verificados.

### DAY & NIGHT

- [ ] Os arquivos oficiais do componente foram integrados.
- [ ] `DayNight.init()` é executado uma única vez.
- [ ] A modalidade e as opções utilizadas existem na API confirmada.
- [ ] O valor `data-theme` alterna entre `light` e `dark`.
- [ ] A preferência `dn-theme` é persistida.
- [ ] A preferência do sistema é considerada na primeira visita.
- [ ] O bootstrap evita o flash do tema incorreto.
- [ ] A barra do navegador acompanha o tema, se suportado pelo alvo.
- [ ] `prefers-reduced-motion` é respeitado.
- [ ] Não existem alternadores nem estados concorrentes.

### Créditos e qualidade

- [ ] O rodapé identifica Eliseu Fernandes Laurindo.
- [ ] O link aponta para o site oficial.
- [ ] O ano é atualizado dinamicamente.
- [ ] Créditos de terceiros foram preservados.
- [ ] Navegação por teclado e foco visível funcionam.
- [ ] Layout responsivo foi testado.
- [ ] Não existem erros relevantes no console ou recursos 404.
- [ ] Funcionalidades originais da aplicação continuam operacionais.

## 13. Procedimento padrão para projetos novos ou existentes

1. Inspecionar estrutura, framework, rotas, CSS, JavaScript, conteúdo e funcionalidades.
2. Ler `ESTILO-VISUAL.md` e este documento integralmente.
3. Confirmar caminhos de publicação e estrutura de base do GitHub Pages ou hospedagem.
4. Localizar os ativos oficiais e o componente DAY & NIGHT.
5. Definir tokens e temas antes de estilizar os componentes.
6. Integrar o bootstrap anti-flash e o componente original, evitando sistemas duplicados.
7. Aplicar cabeçalho, navegação, componentes, rodapé e créditos.
8. Verificar responsividade, acessibilidade, contraste e desempenho.
9. Executar testes funcionais nos dois sentidos da alternância e após recarregar.
10. Relatar arquivos alterados, decisões, testes realmente executados e limitações pendentes.

---

**EXECUTIVE DIGITAL** — *Professional Identity + Modern Technology + Refined Experience.*  
Desenvolvido por Eliseu Fernandes Laurindo.
