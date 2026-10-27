# Roadmap de segurança — site Pastel Carioca

Avaliação feita em 2026-10-27 sobre o código do repositório, o bundle gerado (`dist/`), o `firebase.json`, o workflow do GitHub e o projeto Firebase `pastel-carioca-site` (consultas de leitura pela CLI, com autorização). O que não foi possível verificar está marcado como tal.

## Quem é quem e o que está acontecendo

Informado pelo Johann em 2026-10-27 (declaração, não verificada):

- **Paul** (conta `N1ghtcr4wler` no GitHub) é o dono do negócio e do projeto, e é Owner do repositório e do projeto Firebase.
- **Johann** (conta `johnrj`) é amigo do Paul e o desenvolvedor atual do projeto. Ele está ajudando a **migrar o site da hospedagem atual do Lovable para o Firebase Hosting (plano Spark)**. Não é dono de nada: tem `push` no repositório e algum papel, ainda não conhecido, no projeto Firebase.

Consequências para este roadmap:

- O site no Firebase (`pastel-carioca-site.web.app`) é, por ora, a **segunda** cópia pública. A hospedagem do Lovable continua sendo a original até a virada. Isso muda a leitura do `canonical` (item 3) e cria o item 8 (migração).
- Decisões de dono (domínio, plano, quem tem acesso, desligar a hospedagem antiga) são do Paul; o Johann propõe e executa o que o Paul autorizar.
- O Johann deve ter o menor acesso necessário para fazer o trabalho (item 7), já que não é o dono.

## Situação geral

Superfície de ataque pequena. Site estático (Vite + React) no Firebase Hosting, sem backend, banco, autenticação ou segredos.

O que está bem e não precisa de ação:

- Nenhum segredo no código, no `index.html` ou no bundle (`.env`, chaves de API, tokens, chaves privadas: nada encontrado).
- Nenhuma chamada a servidor próprio. O formulário de pedido monta um link `wa.me` com `encodeURIComponent` e abre o WhatsApp; nada é enviado a servidor do site.
- Nenhum `dangerouslySetInnerHTML` em uso (o único está em `components/ui/chart.tsx`, que não é importado; `recharts`/`lodash` não entram no bundle).
- Nenhuma leitura de parâmetros de URL (`useSearchParams`, `useParams`, `location.search`), o que reduz a exposição às advisories de open redirect do React Router.
- No projeto Firebase: nenhum app registrado, Firestore e Cloud Functions com API desabilitada, nenhuma instância de Realtime Database, um único site de Hosting com só o canal `live`. As falhas clássicas de Firebase (regras abertas, funções sem auth) não se aplicam.
- HSTS forte (`max-age=31556926; includeSubDomains; preload`) e redirecionamento `301` de HTTP para HTTPS, ambos padrão da plataforma e confirmados nos cabeçalhos reais.
- `.firebase/` (cache de deploy) e `changes/` (backups e logs de change) ignorados pelo git. `.firebaserc` só contém o ID do projeto, que é público.

Os itens abaixo estão em ordem de prioridade.

---

## 1. Cabeçalhos de segurança ausentes no Hosting

### Contexto

O `firebase.json` só define `public`, `ignore` e o rewrite SPA. Não há bloco `headers`. Confirmado nos cabeçalhos reais de `web.app` e `firebaseapp.com`: ausentes `Content-Security-Policy`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` e `Permissions-Policy`.

### Problema

- Sem CSP, qualquer script que venha a ser injetado (dependência comprometida, cache de CDN, extensão de navegador do visitante) roda sem restrição e pode carregar o que quiser de qualquer origem.
- Sem `X-Frame-Options`/`frame-ancestors`, qualquer domínio pode embutir o site em `<iframe>` (clickjacking). Impacto baixo aqui porque não há ação sensível na página, mas é proteção gratuita.
- Sem `X-Content-Type-Options: nosniff`, o navegador pode interpretar um arquivo como tipo diferente do declarado.
- Sem `Referrer-Policy`, a URL completa vai como referer para terceiros (Google Fonts, GA, WhatsApp).

Severidade: média. Nenhum desses abre uma brecha sozinho; eles limitam o estrago quando outra coisa falha.

### Solução proposta

Adicionar `headers` ao `firebase.json`:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY` (e `frame-ancestors 'none'` na CSP)
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` negando câmera, microfone, geolocalização e afins
- `Content-Security-Policy` liberando só o necessário: `'self'`, `www.googletagmanager.com` e `*.google-analytics.com` (GA), `fonts.googleapis.com` (CSS) e `fonts.gstatic.com` (fontes), `wa.me` como destino de navegação.

Começar com `Content-Security-Policy-Report-Only`, navegar pelo site inteiro (home, `/blog`, `/blog/receta-coxinha`, formulário, botões de WhatsApp) conferindo o console, e só então trocar para bloqueio. Aplicar via change (processo `CHGNNNN` no ai-memory).

Riscos e consequências:

- O `<script>` inline do `gtag` no `index.html` precisa de hash na CSP (`'sha256-…'`) ou ser movido para um arquivo. Hash é frágil: qualquer edição no inline quebra o GA silenciosamente. Mover para arquivo é mais robusto.
- O JSON-LD inline (`type="application/ld+json"`) não executa e não é afetado pela CSP.
- Uma CSP errada em modo bloqueio derruba GA, fontes ou o próprio app. Por isso o report-only primeiro.
- Dependências novas (chat, mapa, pixel de anúncio) vão exigir atualizar a CSP; isso passa a ser parte do checklist de qualquer integração.

---

## 2. Cache invertido: HTML com 1 hora, assets com 1 hora

### Contexto

Cabeçalho real: `Cache-Control: max-age=3600` tanto no `index.html` quanto em `/assets/index-C814rLGz.js`. É o padrão do Firebase Hosting quando `headers` não é definido.

### Problema

- O `index.html` muda a cada deploy e é o que aponta para os assets novos. Com 1 hora de cache, uma correção (inclusive de segurança) demora até 1 hora para chegar a quem já visitou. Observado na prática na CHG0002: navegador com cache continuou mostrando o bundle antigo depois do deploy.
- Os assets têm hash no nome e nunca mudam de conteúdo; 1 hora de cache para eles é curto demais, gerando recarga desnecessária.

Severidade: baixa como segurança, média como operação (atraso de hotfix).

### Solução proposta

No mesmo bloco `headers` do item 1:

- `index.html` (e `/`): `Cache-Control: no-cache` (o navegador revalida com `ETag`; o Firebase já envia `ETag`).
- `/assets/**`: `Cache-Control: public, max-age=31536000, immutable`.
- `/images/**`, `/lovable-uploads/**`, `favicon.ico`: cache intermediário (dias), porque não têm hash no nome e podem ser substituídos.

Riscos e consequências:

- `no-cache` no HTML aumenta um pouco as requisições à CDN (revalidação a cada visita). Para o volume de um site institucional, irrelevante.
- Se algum asset de `public/` for substituído mantendo o nome, o cache intermediário segura a versão antiga pelo tempo definido. Trocar o nome do arquivo resolve.

---

## 3. Dependências com advisories — **resolvido e publicado em 2026-10-27 (CHG0003)**

### Contexto

`npm audit` no início da avaliação: 23 advisories (17 high, 6 moderate); em produção, 14. Nenhuma crítica. A maior parte era de ferramentas de build; a exposição real no site publicado era baixa (o site não faz `navigate()` nem `<Link>` com destino vindo de fora, e o schema Zod valida 4 strings curtas no navegador do próprio usuário).

### Problema

Dependências desatualizadas aumentam a superfície de ataque mesmo quando o caminho vulnerável não é usado hoje, e dificultam atualizações futuras (quanto mais atrás, maior o salto).

### Solução aplicada

Primeiro as atualizações compatíveis (`npm update react-router-dom` e `npm audit fix` sem `--force`: 23 → 8). Depois os majors, a pedido do Johann:

| Pacote | De | Para | Ajuste de código necessário |
|---|---|---|---|
| `react-router-dom` | 6.30.1 | 7.18.4 | Nenhum (as APIs usadas, `BrowserRouter`, `Routes`, `Route`, `Link`, `Navigate`, existem na v7). |
| `zod` | 3.25.76 | 4.6.7 | `error.errors` → `error.issues` em `OrderForm.tsx` (na v4 `errors` não existe). |
| `vite` | 5.4.21 | 8.3.5 | `__dirname` → `import.meta.dirname` no `vite.config.ts` (a v8 avisa que `__dirname` não será suportado). |
| `@vitejs/plugin-react-swc` → `@vitejs/plugin-react` | 3.11.0 | 6.1.2 | Troca do import em `vite.config.ts`. O plugin SWC não usava nenhum plugin SWC, e o Vite 8 recomenda o `@vitejs/plugin-react` (Rolldown/Oxc). |
| `lovable-tagger` | 1.1.9 | 1.3.5 | Nenhum. |
| `@tailwindcss/typography` | 0.5.20 | 0.5.20 | `overrides` no `package.json` forçando `postcss-selector-parser@^6.1.5` dentro dele (o pacote fixa uma versão vulnerável e a correção do `audit fix --force` seria um downgrade). |

Também foi preciso mudar o `index.html`: o Vite 8 passou a tratar `<link rel="canonical" href="/">` como asset e quebrava o build (`EISDIR`). O `canonical` agora é a URL absoluta `https://pastel-carioca-site.web.app/`, que é o formato correto para buscadores. **Atenção:** enquanto o site original do Lovable estiver no ar e se atualizar a partir deste mesmo repositório, ele também passaria a declarar o `web.app` como canônico, o que enfraquece a versão original no Google. Ver item 8; e, quando houver domínio próprio, essa linha precisa ser trocada.

Resultado: `npm audit` → **0 vulnerabilidades**. `npm run build` sem erros nem warnings; `tsc` sem erros; `eslint` com os mesmos 9 problemas que já existiam.

Testes manuais (build de produção e dev server, Chrome): home com imagens e 7 links de WhatsApp; formulário (validação Zod 4 com campos vazios, quantidade fora do intervalo e envio válido gerando a URL `wa.me` com a mensagem esperada); `/blog` e `/blog/receta-coxinha` abrem o artigo com a tipografia `prose`; rotas desconhecidas terminam em `/`; sem erros nem warnings no console.

Riscos e consequências:

- Vite 8 usa Rolldown no lugar do Rollup/esbuild no build: o bundle gerado muda (tamanho e nomes de arquivo). Não comparei o comportamento em Firefox e Safari, só no Chrome.
- O `overrides` do typography é uma amarra manual: se o pacote for atualizado e deixar de fixar a versão, o override pode ser removido.
- **Publicado em produção** em 2026-10-27 12:41 BRT (CHG0003, commit `621fc2a`). Verificado no site publicado: 0 erros e 0 warnings no console, formulário, rotas, redirect e GA funcionando; bundle novo `index-DlhW39xM.js`. O código está no branch `release/change0003` (PR #1); **o `main` do GitHub ainda não tem essas mudanças** até o merge, que depende dos passos do Paul no item 4.
- Firefox e Safari continuam sem teste.

---

## 4. Workflow do GitHub Pages ainda ativo

### Contexto

`.github/workflows/static.yml` faz deploy para o GitHub Pages a cada push em `main`. O `vite.config.ts` (`base` quando `GITHUB_PAGES`) e o `App.tsx` (`basename` quando o hostname contém `github.io`) ainda carregam a lógica desse ambiente. O site agora é servido pelo Firebase Hosting.

Verificado em 2026-10-27 pela API do GitHub com a conta `johnrj`: o Pages **está habilitado**, com source "branch `main`, pasta `/`". O workflow antigo usava `actions/deploy-pages`, que exige source "GitHub Actions"; essa divergência não foi investigada, então **não se sabe o que o `github.io` serve hoje** (pode ser a versão publicada pelo workflow, pode ser a raiz do repositório sem build).

Estado do código local (não commitado): `.github/workflows/static.yml` foi substituído por `.github/workflows/firebase-hosting.yml`, que a cada push em `main` roda `npm ci`, `npm run build` e publica no canal `live` do Firebase Hosting (Node 20). Esse workflow precisa do secret `FIREBASE_SERVICE_ACCOUNT_PASTEL_CARIOCA_SITE` no repositório; sem ele o job de deploy falha. A lógica de `github.io` em `vite.config.ts` e `App.tsx` foi mantida.

### Problema

- Se o Pages estiver habilitado, o próximo push publica uma **segunda cópia pública** do site em `n1ghtcr4wler.github.io/pastelcarioca`, fora do controle de change.
- Duas cópias significam conteúdo duplicado para buscadores. O JSON-LD usa `"url": "/"` (relativo), então cada cópia se declara canônica.
- Duas superfícies para manter: cabeçalhos, cache e correções precisam ser aplicados nas duas (e o GitHub Pages não permite cabeçalhos customizados, então o item 1 não vale lá).
- O workflow usa `node-version: '18'`, já fora de suporte.

Severidade: média (exposição duplicada e não governada).

### Solução proposta

Decisão a tomar antes do próximo push:

- **Opção A (recomendada):** remover `.github/workflows/static.yml`, a lógica de `GITHUB_PAGES`/`github.io` no `vite.config.ts` e no `App.tsx`, e desabilitar o Pages nas configurações do repositório. O Firebase passa a ser o único destino.
- **Opção B:** manter o Pages de propósito (como ambiente de preview, por exemplo). Nesse caso, adicionar `<link rel="canonical">` apontando para o domínio do Firebase e `robots.txt` com `Disallow: /` na cópia do Pages, para não competir no Google.

Riscos e consequências:

- Opção A: se alguém ainda usa a URL do `github.io`, ela deixa de funcionar. Verificar antes se há links externos (Instagram, Facebook, Google Business) apontando para lá.
- Opção B: duplica trabalho e mantém a exposição; só faz sentido se houver uso real.

### Acesso necessário no GitHub (Paul e Johann)

O repositório é `N1ghtcr4wler/pastelcarioca`, em conta **pessoal** (não organização). A conta `johnrj` do Johann (desenvolvedor, não dono) tem `push` mas **não** tem `admin` (confirmado pela API: `admin:false, maintain:false, push:true`). Isso significa que o Johann não consegue cadastrar secrets, mudar o Pages nem proteger o branch. Informado pelo Johann em 2026-10-27: a conta `N1ghtcr4wler` é do Paul (mesma pessoa) e o Paul é Owner de tudo, no GitHub e no Firebase (declaração, não verificada no console).

**Limitação importante (a confirmar na documentação do GitHub antes de combinar com o Paul):** em repositório de conta pessoal só existe um papel com acesso administrativo, o do dono. Quem é adicionado como colaborador recebe permissão de escrita e, pelo que se observa com o `johnrj`, não ganha acesso às configurações. Por isso **dar acesso de admin ao Johann provavelmente não é possível sem mudar o dono do repositório**. As duas saídas realistas são as opções abaixo.

**Opção 1 (recomendada): o Paul executa os passos.** Como o Paul é o dono e o Johann é o desenvolvedor, é o arranjo natural: o repositório continua do Paul, e o Johann não precisa de poder de administração sobre ele. Passos no GitHub, com a conta `N1ghtcr4wler`:

1. **Settings → Pages:** tirar uma captura do estado atual (URL publicada e source) e enviar ao Johann; depois desabilitar a publicação (source em "None" ou "Unpublish site", conforme a interface mostrar). Antes disso, confirmar com o Johann que nenhum link externo (Instagram, Facebook, Google Business) aponta para o `github.io`.
2. **Secret do deploy:** criar o secret `FIREBASE_SERVICE_ACCOUNT_PASTEL_CARIOCA_SITE` em Settings → Secrets and variables → Actions → New repository secret. O valor é o JSON de uma service account do Firebase com **só** o papel de deploy no Hosting. Forma mais segura de gerar e cadastrar de uma vez, na máquina do Paul, dentro de um clone do repositório: `firebase login` e depois `firebase init hosting:github`, escolhendo o repositório `N1ghtcr4wler/pastelcarioca`, **sem** aceitar gerar um workflow novo (o `firebase-hosting.yml` já existe) e sem PR previews. Esse comando cria a service account, gera a chave e grava o secret no GitHub, sem o JSON passar por chat ou e-mail. Requisito: a conta Google do Paul precisa de permissão no projeto para criar service accounts. Como ele é Owner do projeto (informado), o requisito está atendido.
3. **Settings → Branches → Add branch ruleset (ou protection rule) para `main`:** bloquear *force push* e exclusão do branch. Como push em `main` passa a publicar o site, isso evita publicação acidental por reescrita de histórico. Exigir pull request é opcional (com duas pessoas faz sentido; custa um passo a mais por mudança).
4. **2FA na conta do GitHub** (Settings → Password and authentication). Conta com 2FA desligado e acesso ao secret do deploy equivale a acesso de escrita ao site.
5. Avisar o Johann quando terminar. Nenhum valor secreto (chave JSON, token) deve ser enviado ao Johann por chat.

**Opção 2: tornar o Johann administrador do repositório (não recomendada).** Só funciona se o repositório mudar de dono, o que tira do Paul o controle direto do código do próprio negócio:

- **2a. Transferir o repositório** para uma **organização do GitHub** em que o Johann seja Owner (Settings → Danger Zone → Transfer ownership, no repositório do Paul). A organização precisa existir antes; transferir mantém issues, histórico e branches, mas **muda a URL** (`github.com/<org>/pastelcarioca`) e a do `github.io`. Depois o Johann gerencia secrets e Pages com a própria conta. Verificar antes o que muda no Lovable, que parece ter integração com este repositório (há um branch `edit/edt-…` criado por ele); reconectar a integração pode ser necessário.
- **2b. Transferir para a conta `johnrj`.** Mesmo efeito, com o Johann como dono único e o Paul passando a colaborador de escrita.
- **2c. Token de acesso pessoal do Paul para o Johann (último recurso, desaconselhado).** Um *fine-grained token* do Paul, restrito a este repositório, com permissões de *Administration* e *Secrets* de leitura e escrita e validade curta (por exemplo 1 dia), permitiria ao Johann operar pela CLI. É uma credencial com poder de administrar o repositório trafegando entre duas pessoas; se vazar, qualquer um muda secrets e publica no site. Só faria sentido com revogação imediata depois do uso, e mesmo assim a Opção 1 é mais segura.

**Verificação depois que o Paul concluir** (o Johann, com a conta `johnrj`, sem privilégio extra):

- `gh secret list -R N1ghtcr4wler/pastelcarioca` mostra `FIREBASE_SERVICE_ACCOUNT_PASTEL_CARIOCA_SITE` (lista só nomes e datas, não valores; pode exigir permissão que o `johnrj` não tem, e nesse caso o Paul confirma pelo painel).
- `gh api repos/N1ghtcr4wler/pastelcarioca/pages` deixa de devolver o site (ou o Paul envia a captura do Pages desabilitado).
- O primeiro push em `main` com o workflow novo roda como uma change (`CHG0003`), com o Johann acompanhando o job em Actions e conferindo o site depois.

**Riscos e consequências das opções**

- Opção 1: depende da disponibilidade do Paul. Como ele é Owner no Firebase e no GitHub, não há bloqueio de permissão; o passo 2 deve funcionar como descrito (não testado).
- Opção 2a e 2b: mudam a URL do repositório e podem quebrar a integração com o Lovable e links que apontam para o GitHub; ganho é o Johann deixar de depender do Paul para ajustes de CI.
- Em todas as opções, a chave da service account fica guardada no GitHub como credencial de longa duração (ver item 7). Alternativa sem chave: Workload Identity Federation entre GitHub e Google Cloud, que o Johann ou o Paul teriam de configurar com as mesmas permissões e que também exige acesso de admin ao repositório para o ajuste de Settings.

---

## 5. Google Analytics: script inline e ID não confirmado

### Contexto

`index.html` carrega `gtag.js` de `www.googletagmanager.com` com ID `G-M3E4X6K6MK` e um `<script>` inline de configuração. Não há GTM nem Universal Analytics. Não foi confirmado em qual conta/propriedade GA esse ID está.

### Problema

- Script de terceiro com acesso total à página. Risco aceito por praticamente todo site comercial; o que o item 1 faz é limitar o que mais pode ser carregado.
- O site já existia no Lovable antes da migração, então o ID provavelmente é uma propriedade que o Paul (ou quem montou o site) criou, e não um ID de template. Isso é inferência, não confirmação: o Paul confirma no painel do GA.
- O inline dificulta a CSP (item 1).

Severidade: baixa.

### Solução proposta

1. O Paul confirma no painel do GA que `G-M3E4X6K6MK` pertence à propriedade do Pastel Carioca e que o fluxo de dados aceita os hostnames `pastel-carioca-site.web.app` e `firebaseapp.com` (e o domínio próprio, quando houver).
2. Mover o `<script>` inline de configuração para um arquivo em `public/` (por exemplo `/ga.js`), para a CSP liberar por origem em vez de hash.

Riscos e consequências:

- Trocar o ID zera o histórico de dados na propriedade antiga; aceitável se ela não era a correta.
- Mover o script para arquivo adiciona uma requisição pequena; sem efeito perceptível.

---

## 6. Dados pessoais no formulário e privacidade

### Contexto

O formulário de pedido coleta nome, telefone, quantidade e endereço, valida com Zod e abre `https://wa.me/573244524438?text=…` com esses dados na URL. O número de WhatsApp está hard-coded em 10 arquivos. Não há política de privacidade nem aviso de tratamento de dados no site.

### Problema

- Os dados vão para o histórico de navegação do usuário e para o WhatsApp; nada fica em servidor do site, o que é bom. Mas o usuário não é informado de que o pedido sai pelo WhatsApp dele com esses dados.
- A Colômbia tem lei de proteção de dados (Ley 1581 de 2012, habeas data). Se ela exige aviso ou política para este caso de coleta, o site está em falta. **Não confirmado**: isso precisa de quem conheça a exigência legal, não é conclusão desta avaliação.
- O número de WhatsApp é público por natureza (é o canal de venda); só fica registrado que ele está em todo o bundle.

Severidade: baixa como segurança técnica; indeterminada como conformidade.

### Solução proposta

1. Adicionar uma frase junto ao botão de envio do formulário deixando claro que os dados vão compor uma mensagem de WhatsApp enviada pelo próprio usuário.
2. Avaliar com alguém que conheça a legislação colombiana se é necessária uma página de política de privacidade. Se for, criar a rota (lembrando de adicioná-la antes do catch-all em `App.tsx`, que hoje redireciona tudo para `/`).
3. Centralizar o número de WhatsApp em um único arquivo de constantes, para trocar em um lugar só se o número mudar.

Riscos e consequências:

- Nenhum risco técnico. O custo é de texto e de uma rota a mais.
- Centralizar o número é refatoração pequena, mas toca 10 arquivos; fazer em commit separado.

---

## 7. Papéis e 2FA

### Contexto

Pela CLI não é possível listar quem tem acesso IAM ao projeto nem ver o plano de cobrança (`gcloud` não está instalado); essas duas informações vieram do Johann. Cloud Storage, Authentication e App Check não têm comando de listagem na CLI; os três foram conferidos pelo Johann no console (ver abaixo).

Informado pelo Johann em 2026-10-27: só ele e o Paul têm acesso ao projeto Firebase. **Isso é declaração, não verificação**: não conferi a lista no console, então os papéis de cada um e a presença de contas de serviço ou de terceiros (por exemplo da Lovable) continuam sem confirmação.

### Problema

Com a lista de pessoas e o plano de cobrança resolvidos, restam três pontos:

- **Papel de cada conta.** Informado pelo Johann: o Paul é Owner de tudo (GitHub e Firebase). É o esperado para o dono do projeto, mas concentra o poder de apagar o site ou mudar o plano numa só pessoa. **O papel do Johann no Firebase não foi informado**; observado: a conta `johnrj` conseguiu listar projetos e fazer deploy no Hosting (CHG0001 e CHG0002), então tem ao menos permissão de deploy, mas não se sabe se mais que isso.
- **2FA.** Se qualquer uma das duas contas Google não tem verificação em duas etapas, o projeto inteiro depende de uma senha. Não se sabe.
- **Plano de cobrança: resolvido.** Informado pelo Johann em 2026-10-27: o plano é **Spark** (gratuito; declaração, não verificada no console). Nele, estourar a cota só tira o site do ar, sem cobrança, então o risco de fatura por pico de tráfego ou ataque não existe. Fica a observação de que o Spark limita o Hosting (armazenamento e transferência mensal); um site com PNGs de 1 a 2 MB consome transferência mais rápido do que o necessário. Se o plano virar Blaze (por exemplo para habilitar Functions ou outro serviço), o risco de custo sem teto passa a valer e o alerta de orçamento é obrigatório.
- **Conta de serviço do deploy automático.** O workflow do GitHub (item 4) vai exigir uma service account com chave guardada como secret no repositório. Isso passa a ser um terceiro "acesso" ao projeto, que deve ter o menor papel possível (só deploy no Hosting).

Severidade: indeterminada até verificar o papel e o 2FA; potencialmente alta (tomada de controle do site). O risco de custo sem limite saiu da conta com o plano Spark, e a lista curta de acessos reduz o risco de terceiros desconhecidos.

### Solução proposta

Verificar no console do Firebase/Google Cloud:

1. **Configurações do projeto → Usuários e permissões:** o Paul confere que ele é Owner, qual é o papel do Johann (idealmente só o necessário para publicar, como Firebase Hosting Admin, e não Owner/Editor; ao fim da migração, rever se o Johann precisa continuar com acesso) e que não há outras contas.
2. **2FA nas duas contas Google e na conta do GitHub do Paul** (de preferência chave de segurança ou app autenticador, não só SMS).
3. **Plano:** manter no Spark. Antes de qualquer upgrade para Blaze, criar um **alerta de orçamento** no Cloud Billing (por exemplo, aviso em 50% e 100% de um valor mensal baixo).
4. ~~Storage, Authentication e App Check~~ **Confirmado em 2026-10-27, por prints do console enviados pelo Johann:** App Check mostra a tela inicial com "Começar" (nunca configurado); Authentication mostra a tela inicial com "Vamos começar" (nunca configurado, sem provedores nem usuários); Storage exibe "Para usar Storage, faça upgrade do plano de preços do seu projeto" (não habilitado, e bloqueado enquanto o plano for Spark, o que também é consistente com o plano informado).
5. Ao criar a service account do deploy (CHG0003), dar só o papel de deploy no Hosting e registrar a conta aqui.
6. Registrar o resultado em `concepts/ambiente-producao.md` no ai-memory.

Riscos e consequências:

- Reduzir o papel do Johann pode impedir algo que ele faz hoje (por exemplo mexer em domínio ou configuração). Combinar com o Paul antes, já que é ele quem administra as permissões.
- No Spark, se a cota de transferência do Hosting estourar, o site fica indisponível até o ciclo virar ou até o upgrade. Otimizar as imagens (PNGs de 1 a 2 MB) reduz esse risco e também melhora o carregamento.
- Alerta de orçamento (relevante só no Blaze) não bloqueia gasto, só avisa. Bloqueio automático exige Cloud Function que desative o faturamento, o que é mais complexo do que o site justifica hoje.
- A chave da service account é credencial de longa duração. Alternativa sem chave guardada: Workload Identity Federation, mais trabalhosa de configurar.

---

## 8. Migração do Lovable para o Firebase: virada e hospedagem antiga

### Contexto

O site original está na hospedagem do Lovable; o Firebase Hosting (Spark) é o destino. Não foi verificado: qual é a URL do site no Lovable, se existe domínio próprio apontando para ele, onde o DNS é gerenciado, e se o Lovable ainda publica a partir deste repositório (há um branch `edit/edt-…` criado por ele, o que indica integração ativa, mas não confirma).

### Problema

- **Duas cópias públicas ao mesmo tempo** (Lovable e Firebase): conteúdo duplicado para o Google, métricas do GA misturadas (o mesmo ID `G-M3E4X6K6MK` recebe visitas dos dois) e correções que precisam ser aplicadas nos dois lugares.
- **`canonical` apontando para o `web.app`** enquanto o Lovable é o original (item 3): pode deslocar a indexação para a cópia nova antes da hora, ou para o domínio errado depois da virada.
- **Cabeçalhos de segurança (item 1) só existem no Firebase**; a cópia do Lovable continua sem eles (não verificado o que o Lovable permite configurar).
- **Virada de DNS**: se houver domínio próprio, trocá-lo para o Firebase tem janela de propagação e exige configurar o domínio no Hosting (verificação por TXT/A). Erro nisso deixa o site fora do ar. Se o plano Spark permite domínio personalizado não foi verificado aqui.
- **O que acontece com a hospedagem antiga depois**: se for desligada sem redirecionamento, links antigos (Instagram, Google Business, buscas) quebram; se ficar no ar para sempre, vira a cópia duplicada.

Severidade: média; é risco de SEO e de disponibilidade durante a virada, não de invasão.

### Solução proposta

1. O Paul informa a URL atual do site no Lovable, o domínio (se houver), onde o DNS é gerenciado e se existe tráfego pago ou links fixos apontando para o endereço antigo.
2. Definir a data da virada e o que fica de pé depois dela: redirecionamento 301 da URL antiga para a nova, ou desligamento do projeto no Lovable. Decisão do Paul.
3. Antes da virada, o `canonical` do repositório não deve apontar para o `web.app` se o Lovable continuar publicando a partir dele; deve apontar para o endereço definitivo. Se o domínio definitivo ainda não existe, avaliar manter a pendência registrada em vez de fixar um canônico que depois estará errado.
4. Na virada (change própria): adicionar o domínio no Firebase Hosting, ajustar o DNS com TTL baixo, conferir o HTTPS emitido e o `canonical`, `og:url`, `og:image` e JSON-LD com o domínio final (ver item 3 e as URLs relativas citadas no item 6).
5. Depois da virada: manter a hospedagem antiga no ar com redirecionamento por um período (semanas), acompanhar o Search Console e então desligá-la.

Riscos e consequências:

- Dois ambientes de publicação (Lovable e GitHub Actions) para o mesmo repositório: se o Lovable commitar em `main` e o workflow publicar no Firebase a cada push, cada commit do Lovable passa a atualizar o Firebase sem uma change registrada. É o comportamento desejado depois da virada; antes dela, definir se o workflow só deve ser ativado depois.
- Tráfego do site original vai cair na cópia nova se o DNS virar antes de o Firebase estar completo (cabeçalhos, imagens e GA conferidos).
- Qualquer mudança de DNS ou domínio no ambiente publicado segue o processo de change do ai-memory.

---

## Ordem sugerida de execução

| Ordem | Item | Tipo | Observação |
|---|---|---|---|
| 1 | 7 — papéis e 2FA | Verificação manual no console | Sem código. Pessoas (Johann e Paul), plano (Spark) e papel do Paul (Owner) já informados; Storage, Authentication e App Check confirmados desligados; faltam o papel do Johann e o 2FA. |
| 2 | 4 — GitHub Pages | Decisão + commit | Antes de qualquer push para `main`. |
| 3 | 3 — dependências (+ imagens, JSON-LD, canonical, workflow) | Change (`CHG0003`) | **Concluída com ressalvas** em 2026-10-27; publicada no Firebase. PR #1 aberto, merge pendente do item 4 (Paul). |
| 3b | 1 + 2 — cabeçalhos e cache | Change (`CHG0004`) | CSP em report-only primeiro. Considerar `no-cache` no HTML antes ou junto da CHG0003 (risco de tela em branco por cache, ver a página da CHG0003). |
| 4 | 5 — GA | Verificação no painel + ajuste no `index.html` | Pode entrar na CHG0003 se o ID for confirmado antes. |
| 5 | 8 — migração (virada) | Decisão do Paul + change (DNS) | Depende de informações do Paul (URL antiga, domínio, DNS). Define o `canonical` final. |
| 6 | 6 — privacidade | Texto + eventual rota | Depende de avaliação legal. |
| 7 | 1 (fase 2) — CSP em bloqueio | Change (`CHG0005`) | Só depois de alguns dias sem relatórios de violação. |

Toda mudança no ambiente publicado segue o processo de change registrado no ai-memory (`changes/index.md`): plano, estado antes, backup, rollback, aprovação, log e estado depois.
