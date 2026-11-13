# EXECUTIVE DIGITAL — Guia de Identidade Visual

**Versão:** 2.0  
**Idioma:** Português (Brasil)  
**Responsável pela identidade:** Eliseu Fernandes Laurindo  
**Site oficial:** <https://eliseuangelos.github.io/>  
**Documento complementar:** [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md)

---

## 1. Propósito e autoridade deste documento

O **EXECUTIVE DIGITAL** é a identidade visual transversal dos projetos digitais de Eliseu Fernandes Laurindo. Este documento define a linguagem visual, os princípios de composição e as regras de uso da marca. O documento `DESIGN-SYSTEM.md` transforma essas diretrizes em decisões técnicas de CSS, temas, componentes e integração.

Use os termos abaixo como níveis de exigência:

- **Obrigatório:** deve ser seguido em todos os projetos, salvo incompatibilidade técnica documentada.
- **Recomendado:** deve ser aplicado quando melhorar a experiência sem prejudicar o propósito da aplicação.
- **Opcional:** pode ser adaptado à personalidade e às necessidades do produto.

A identidade não é um template único. Portfólios, ferramentas, jogos, páginas institucionais e aplicações podem ter layouts diferentes, mas devem compartilhar a mesma linguagem institucional.

## 2. Conceito da marca

**EXECUTIVE DIGITAL**  
*Professional Identity + Modern Technology + Refined Experience.*

A identidade combina aparência executiva e confiável com design contemporâneo, organização editorial e detalhes tecnológicos discretos.

### 2.1. Valores visuais

- Profissionalismo e credibilidade.
- Clareza, organização e hierarquia.
- Tecnologia e inovação sem exageros.
- Elegância e refinamento.
- Consistência entre páginas e produtos.
- Acessibilidade e conforto de leitura.

### 2.2. Princípios inegociáveis

1. O conteúdo é o protagonista; a decoração não compete com ele.
2. Legibilidade, hierarquia, contraste e espaços de respiro têm prioridade.
3. Efeitos tecnológicos são usados como microinterações ou recursos funcionais.
4. A identidade deve permanecer reconhecível nos temas DIA e NOITE.
5. Cada produto pode ter personalidade própria sem abandonar a assinatura institucional.
6. A interface deve ser responsiva e acessível desde o início.
7. Não utilizar preto puro como fundo predominante no tema escuro.

### 2.3. Direções que não representam a marca

Evitar estética gamer, cyberpunk, Matrix, terminal, scanlines, brilho neon, gradientes chamativos, excesso de partículas, glassmorphism indiscriminado, sombras luminosas e animações contínuas sem função.

---

## 3. Ecossistema de marca e referências

A identidade é aplicada em duas camadas:

- **Marca institucional:** identifica o autor/desenvolvedor e conecta os projetos ao site pessoal e profissional.
- **Identidade do produto:** permite que cada ferramenta, jogo ou aplicação tenha nome, ícone e composição próprios, sem apagar a autoria institucional.

### 3.1. Projetos de referência

Os projetos publicados abaixo são referências de evolução e aplicação do sistema:

- **Portfólio pessoal e profissional:** <https://eliseuangelos.github.io/>
- **Gerador de Caça-Palavras:** <https://eliseuangelos.github.io/caca-palavras/>
- **DAY & NIGHT EXPERIENCE:** <https://eliseuangelos.github.io/day-night-experience/>
- **Repositório do DAY & NIGHT EXPERIENCE:** <https://github.com/eliseuangelos/day-night-experience>

O portfólio serve como referência institucional; o Gerador de Caça-Palavras demonstra a aplicação em uma ferramenta funcional; o DAY & NIGHT EXPERIENCE é a referência técnica e visual da alternância entre temas.

### 3.2. Arquivos oficiais da marca

A fonte oficial dos arquivos é o repositório principal, no commit abaixo:

<https://github.com/eliseuangelos/eliseuangelos.github.io/tree/9021a56d3219b70d78a0ec5c665a0db17155da7d/assets/icons>

| Arquivo | Uso previsto |
|---|---|
| `brand-symbol.svg` | Símbolo institucional em cabeçalhos, áreas de marca e aplicações autorizadas. |
| `favicon.svg` | Ícone da página nas abas e interfaces do navegador. |
| `apple-touch-icon.png` | Ícone de atalho para dispositivos Apple compatíveis. |

**Regras obrigatórias:**

- Usar os arquivos originais; não redesenhar o símbolo com CSS ou caracteres.
- Não substituir os arquivos por emojis ou ícones genéricos.
- Não distorcer, inclinar, recortar ou alterar arbitrariamente as proporções.
- Não aplicar filtros que alterem a aparência original.
- Preservar a integridade vetorial dos SVGs.
- Usar versões monocromáticas ou alternativas somente se existirem oficialmente ou forem aprovadas pelo responsável pela marca.
- Em projetos independentes, copiar os arquivos para a pasta local `assets/icons/` é a opção preferencial para evitar dependência de caminhos externos.
- Registrar a origem e o commit de onde os arquivos foram obtidos.

A aplicação deve adequar os caminhos ao tipo de publicação. No GitHub Pages, um site de usuário e um site de projeto possuem bases de URL diferentes. Não presumir que `/assets/icons/...` funcione em um repositório publicado em subdiretório.

---

## 4. Paleta cromática oficial

A paleta original do guia `estilo-visual-backup.txt` é preservada como base oficial. Os valores não devem ser alterados informalmente em projetos individuais.

### 4.1. Cores centrais da marca

| Nome | Código | Função |
|---|---|---|
| Azul executivo | `#1D4263` | Identidade institucional e elementos de confiança. |
| Azul digital | `#2563EB` | Ações, links e destaque funcional no tema claro. |
| Verde tecnológico | `#0B7E82` | Acentos tecnológicos e estados complementares. |

### 4.2. Tema DIA — LIGHT

| Token visual | Código |
|---|---|
| Fundo principal | `#F4F7FB` |
| Superfície / cartões | `#FFFFFF` |
| Superfície secundária | `#E9EFF5` |
| Texto principal | `#162638` |
| Texto secundário | `#526579` |
| Bordas | `#D5DEE8` |
| Azul institucional | `#1D4263` |
| Azul de ação | `#2563EB` |
| Verde tecnológico | `#0B7E82` |

### 4.3. Tema NOITE — DARK

| Token visual | Código |
|---|---|
| Fundo principal | `#111C28` |
| Superfície / cartões | `#1B2A3A` |
| Superfície secundária | `#24364A` |
| Texto principal | `#EDF3F8` |
| Texto secundário | `#B7C5D3` |
| Bordas | `#3A4D60` |
| Azul institucional | `#91B7D8` |
| Azul de ação | `#83B4FF` |
| Verde tecnológico | `#68CBC2` |

### 4.4. Regras de aplicação

- O tema NOITE usa níveis diferentes de superfícies; nunca deve ser um fundo preto uniforme.
- Cartões, campos e menus devem ser distinguíveis do fundo.
- Textos secundários precisam permanecer legíveis; não reduzir a opacidade indiscriminadamente.
- Não usar azul institucional escuro como texto em superfícies escuras.
- Cores de destaque devem ocupar áreas proporcionais à importância da ação.
- Gradientes são opcionais, discretos e localizados.
- Estados nunca podem ser comunicados apenas por cor; incluir texto, ícone, borda ou outro indicador.
- Cores de sucesso, alerta, erro e informação podem ser complementadas por projeto, mas precisam ser definidas semanticamente e verificadas nos dois temas.

**Contraste:** validar os pares reais de texto, superfície, borda, foco e estados segundo WCAG 2.2 AA. A existência de uma cor na paleta não garante, por si só, que toda combinação seja acessível.

---

## 5. Tipografia

### 5.1. Famílias

- **Principal:** Inter ou Manrope.
- **Técnica secundária:** IBM Plex Mono.
- **Fallback:** `system-ui`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, sans-serif.

A fonte principal deve ser usada em títulos, textos, menus, botões e formulários. A monoespaçada fica reservada a códigos, identificadores, pequenos metadados e indicadores técnicos.

### 5.2. Pesos e escalas de referência

| Elemento | Referência |
|---|---|
| Pesos usuais | 400, 500, 600 e 700 |
| H1 | `clamp(2.2rem, 5vw, 3.8rem)`, peso 700 |
| H2 | `clamp(1.7rem, 3vw, 2.5rem)`, peso 650/700 |
| H3 | 1.2rem a 1.5rem, peso 600 |
| Texto principal | 1rem a 1.125rem; line-height 1.6 a 1.75 |
| Texto auxiliar | 0.875rem a 0.95rem |
| Etiquetas | 0.75rem a 0.825rem, peso 600 |

Usar `clamp()` para escalas fluidas, evitar caixa alta em frases longas e manter largura de leitura confortável (aproximadamente 60–75 caracteres por linha).

---

## 6. Layout e composição

- Conteúdo centralizado, com largura máxima de referência entre 1100px e 1200px.
- Padding lateral mobile de referência: 20px.
- Usar CSS Grid e Flexbox para estruturar conteúdo.
- Preferir grades adaptáveis com `minmax()`, `auto-fit` e `auto-fill`.
- Alinhar elementos de forma consistente.
- Não transformar cada parágrafo em um cartão.
- Usar divisórias apenas quando ajudarem a leitura ou a organização.

### 6.1. Espaçamento de referência

| Contexto | Espaçamento |
|---|---|
| Entre seções desktop | 64–96px |
| Entre seções mobile | 44–64px |
| Padding de cartões | 20–28px |
| Gap de grids | 18–24px |
| Padding lateral mobile | aproximadamente 20px |

Ajustar conforme densidade e finalidade do produto, preservando uma escala coerente baseada em múltiplos de 4px.

---

## 7. Componentes e padrões visuais

### 7.1. Cabeçalho e navegação

- Cabeçalho limpo, alinhado e discreto.
- Símbolo institucional ou marca do produto no local apropriado.
- Fundo sólido ou translúcido com contraste suficiente.
- Divisor fino ou sombra leve quando necessário.
- Links com hover, focus e estado ativo perceptíveis.
- Indicador ativo discreto, como linha inferior.
- Menu mobile compacto, acessível e funcional.
- Alternador de tema não deve competir com a navegação.

### 7.2. Botões

Definir padrões visuais para botões primários, secundários, terciários/ghost, ícones e ações destrutivas.

- Altura de referência: 42–48px.
- Padding horizontal confortável.
- Raios de 8–12px; formato pill apenas quando fizer sentido.
- Hover com mudança sutil de tonalidade ou profundidade.
- Focus visível e estados disabled claramente identificáveis.
- Rótulos devem comunicar a ação.

### 7.3. Cartões

- Superfície `surface` e borda `border`.
- Raio de 10–18px.
- Sombra discreta; sem halo luminoso no tema NOITE.
- Padding consistente.
- Hover opcional com elevação curta (aproximadamente 2–4px).
- Sem zoom ou brilho exagerado.
- Hierarquia clara entre título, conteúdo e ação.

### 7.4. Formulários

- Labels visíveis; placeholder não substitui label.
- Campos com superfície, borda e texto próprios do tema atual.
- Estados focus, error, success e disabled explícitos.
- Erros devem ser descritos em texto e associados ao campo.
- No tema NOITE, campos não devem permanecer brancos por padrão.

### 7.5. Ícones

- Preferir uma família vetorial coerente.
- Manter tamanhos e espessuras de traço consistentes.
- Não usar emojis como ícones de interface.
- Usar ícones para reforçar significado, não como decoração aleatória.
- Ícones funcionais devem ter nome acessível quando não acompanhados por texto.

### 7.6. Imagens

- Preservar proporções e evitar distorção.
- Definir `width`/`height` ou `aspect-ratio` para reduzir layout shift.
- Usar `object-fit` adequado ao conteúdo.
- Usar raios discretos e consistentes.
- Aplicar lazy loading fora da primeira área visível, quando apropriado.
- Não aplicar filtros que prejudiquem a fidelidade de fotografias ou ilustrações.

---

## 8. Temas DIA e NOITE

Os temas são duas apresentações completas da mesma interface, e não uma inversão automática de cores.

### DIA — LIGHT

Deve transmitir clareza, leveza e organização. Superfícies brancas e secundárias são distribuídas sobre o fundo `#F4F7FB`, com texto escuro confortável e ações em azul.

### NOITE — DARK

Deve preservar conforto visual e hierarquia. Usar fundo `#111C28`, cartões `#1B2A3A`, superfícies secundárias `#24364A` e texto claro. Não recorrer a preto puro predominante nem a brilhos neon.

### Regras comuns

- Todos os componentes devem responder ao tema atual.
- Imagens, SVGs, gráficos, menus, modais, formulários, tabelas, rodapé e estados precisam ser avaliados nos dois temas.
- Não usar `filter: invert()` como estratégia de tema.
- O tema selecionado deve permanecer consistente após navegação e recarregamento.
- A preferência inicial deve considerar a preferência do sistema operacional quando não houver uma escolha salva.
- O controle deve ser operável por teclado, ter nome acessível e indicar sua função.

A implementação e a integração com o componente original estão especificadas em `DESIGN-SYSTEM.md`.

---

## 9. Movimento e microinterações

### 9.1. Ritmo

| Tipo | Duração de referência |
|---|---:|
| Rápido | 180ms |
| Padrão | 280ms |
| Ênfase | 420ms |

Curva de referência: `cubic-bezier(.2, .7, .2, 1)`.

### 9.2. Efeitos adequados

- Fade-in com pequeno deslocamento vertical.
- Elevação sutil de cartões.
- Transições de cor em links e botões.
- Sublinhado animado na navegação.
- Pequenos movimentos de ícones quando comunicarem feedback.
- Indicadores de progresso quando úteis.
- Transição controlada entre temas.
- Linhas finas e detalhes geométricos discretos.

### 9.3. Restrições

- Não usar Matrix, scanlines, cursor piscando ou brilho neon.
- Não exagerar em partículas, parallax ou animações contínuas.
- Não atrasar acesso ao conteúdo por animações ou loaders artificiais.
- Respeitar `prefers-reduced-motion`.
- Conteúdo essencial nunca deve depender de animação para aparecer.

---

## 10. Responsividade

Adotar abordagem mobile-first. Validar, no mínimo:

- Smartphone estreito.
- Smartphone convencional.
- Tablet em retrato e paisagem.
- Notebook.
- Desktop amplo.

Garantir ausência de rolagem horizontal involuntária, textos confortáveis, alvos de toque adequados, navegação móvel funcional, grids adaptáveis, imagens sem cortes indevidos e cabeçalhos/rodapés sem sobreposição.

Preferir `max-width`, `minmax()`, `clamp()`, `%` e `rem`. Evitar dimensões fixas que quebrem em telas menores.

---

## 11. Acessibilidade e qualidade percebida

Usar WCAG 2.2 AA como referência de implementação e validação:

- Contraste mínimo de 4,5:1 para texto normal.
- Contraste mínimo de 3:1 para texto grande e componentes gráficos relevantes.
- Navegação por teclado e foco visível.
- HTML semântico e hierarquia correta de headings.
- Labels para campos.
- ARIA apenas quando necessário.
- Texto alternativo adequado para imagens informativas.
- Links com propósito compreensível.
- Estados identificáveis sem depender exclusivamente da cor.
- Respeito a `prefers-reduced-motion`.
- Não remover `outline` sem substituição acessível.

A experiência final deve parecer rápida, previsível e confortável. Evitar efeitos que prejudiquem desempenho, estabilidade visual ou leitura.

---

## 12. Créditos e autoria institucional

Todos os sites e aplicações deverão apresentar a identificação de autoria no rodapé.

**Texto institucional recomendado:**

> Desenvolvido por **Eliseu Fernandes Laurindo**  
> <https://eliseuangelos.github.io/>

Também incluir, de forma discreta e legível:

> © [ano atual] Eliseu Fernandes Laurindo. Todos os direitos reservados.

Regras:

- O nome deve direcionar ao site oficial.
- O ano deve ser atualizado dinamicamente.
- Os créditos devem estar presentes em todas as páginas principais e secundárias do projeto, de acordo com a arquitetura da aplicação.
- Não esconder ou remover a autoria em versões futuras.
- Preservar créditos e avisos de licenças de bibliotecas, fontes, imagens e componentes de terceiros.
- Os créditos de terceiros não substituem a identificação de autoria de Eliseu Fernandes Laurindo.

---

## 13. Checklist visual de aceitação

- [ ] A identidade EXECUTIVE DIGITAL está reconhecível.
- [ ] A composição respeita a finalidade do produto.
- [ ] A paleta oficial está preservada.
- [ ] Os temas DIA e NOITE foram tratados como sistemas completos.
- [ ] Não há preto puro predominante no tema NOITE.
- [ ] Tipografia e hierarquia são consistentes.
- [ ] Cabeçalho, navegação, botões, cartões e formulários seguem padrões coerentes.
- [ ] Os ativos oficiais são usados sem distorção.
- [ ] Animações são funcionais e discretas.
- [ ] `prefers-reduced-motion` é respeitado.
- [ ] A interface se adapta a telas pequenas e grandes.
- [ ] Contrastes foram verificados nos pares reais.
- [ ] Créditos de desenvolvimento aparecem no rodapé.
- [ ] Não há elementos decorativos competindo com o conteúdo.

---

**EXECUTIVE DIGITAL** — *Professional Identity + Modern Technology + Refined Experience.*  
Desenvolvido por Eliseu Fernandes Laurindo.
