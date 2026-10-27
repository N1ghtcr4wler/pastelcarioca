# Pastel Carioca — site

Site institucional e de pedidos da Pastel Carioca (coxinha brasileña a domicilio em Bogotá). É uma página estática em React: não há backend, banco de dados nem variáveis de ambiente. O pedido sai pelo WhatsApp (o formulário monta um link `wa.me` e abre a conversa).

O conteúdo do site é em espanhol (Colômbia). Este README e a documentação interna são em português.

- **Produção (Firebase Hosting):** <https://pastel-carioca-site.web.app> (também em <https://pastel-carioca-site.firebaseapp.com>)
- **Projeto Firebase:** `pastel-carioca-site` (plano Spark)
- **Repositório:** <https://github.com/N1ghtcr4wler/pastelcarioca>
- **Origem do projeto:** criado no [Lovable](https://lovable.dev/projects/75b26b8b-b2ec-4cbf-81ec-5798ecc27763). A hospedagem está sendo migrada do Lovable para o Firebase; enquanto a virada não acontece, o site original continua no Lovable.

## Stack

- Vite 8, React 18, TypeScript
- Tailwind CSS 3 + shadcn/ui (Radix)
- React Router 7 (`BrowserRouter`)
- Zod 4 (validação do formulário de pedido)
- Google Analytics 4 (`gtag`, ID no `index.html`)

## Requisitos

- **Node.js 20.19 ou superior** (ou 22.12+), exigência do Vite 8. Com [nvm](https://github.com/nvm-sh/nvm#installing-and-updating): `nvm install 22`.
- npm (o projeto usa `package-lock.json`; o `bun.lockb` é resquício do Lovable e não é usado).
- Para publicar: Firebase CLI (`npm install -g firebase-tools`) e acesso ao projeto `pastel-carioca-site`.

## Rodando localmente

```sh
git clone https://github.com/N1ghtcr4wler/pastelcarioca.git
cd pastelcarioca
npm ci
npm run dev
```

O servidor de desenvolvimento sobe em <http://localhost:8080>.

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento com recarga automática (porta 8080). |
| `npm run build` | Build de produção em `dist/`. |
| `npm run build:dev` | Build em modo `development`. |
| `npm run preview` | Serve o `dist/` localmente (porta 4173) para testar o build. |
| `npm run lint` | ESLint. Hoje reporta 9 problemas que já existiam antes (2 erros, 7 avisos); não são de mudanças recentes. |

Não há suíte de testes automatizados. A verificação é manual: build sem erros, `npx tsc -p tsconfig.app.json --noEmit` e navegação pelo site (home, formulário, `/blog`, rotas desconhecidas).

> No Windows, rodar `npm install` com o servidor de desenvolvimento aberto pode falhar com `EBUSY` no binário do rollup. Pare o servidor antes.

## Estrutura

```text
src/
  App.tsx                 Rotas
  pages/
    Index.tsx             Página inicial (monta as seções)
    Blog.tsx              Artigo "Receta Simple de Coxinha en Casa"
    NotFound.tsx          Sem uso (rotas desconhecidas redirecionam para "/")
  components/
    site/                 Seções do site (Header, Hero, FeaturedGrid, OrderForm, ...)
    ui/                   Componentes shadcn/ui
  assets/                 Imagens importadas pelo código (o Vite gera nomes com hash)
  lib/assets.ts           Utilitário de caminho de arquivos de public/
public/
  lovable-uploads/        Logo, favicon e imagem do hero (URL fixa, sem hash)
  images/og-hero.jpg      Imagem de compartilhamento (Open Graph)
  robots.txt
index.html                SEO (meta tags, JSON-LD), GA e fontes
firebase.json             Configuração do Hosting
.firebaserc               Projeto padrão do Firebase
.github/workflows/        Deploy automático (ver abaixo)
roadmap-seguranca.md      Avaliação de segurança e próximos passos
```

### Rotas

Definidas em [src/App.tsx](src/App.tsx): `/`, `/blog` e `/blog/receta-coxinha`. **Qualquer outra rota redireciona para `/`.** Ao criar uma página nova, adicione a rota **acima** da rota `*`, senão ela será redirecionada.

Hoje nenhum link do site aponta para `/blog`; a página só abre digitando a URL.

### Imagens

- Use **WebP** redimensionado para cerca de 2x o tamanho exibido. O site está no plano Spark do Firebase, que tem cota mensal de transferência; as imagens originais em PNG (1 a 2 MB cada) foram reduzidas de ~10,7 MB para ~313 KB no total.
- Imagens importadas em componentes (`@/assets/...`) ganham hash no nome e são otimizadas pelo build. Imagens em `public/` mantêm o nome fixo; se substituir um arquivo mantendo o nome, o cache do navegador pode segurar a versão antiga por até 1 hora.
- Há arquivos em `public/lovable-uploads/` e `src/assets/` que nenhum código referencia (herança do Lovable). Os de `public/` **são publicados mesmo assim**.

### WhatsApp

O número de pedidos (`573244524438`) está repetido como constante em vários componentes (`WA_MAIN`, `OrderForm.tsx`, `Blog.tsx`). Ao trocar o número, procure por ele no código.

## Publicação (Firebase Hosting)

### Manual (como é feito hoje)

```sh
firebase login                      # uma vez, com uma conta com acesso ao projeto
npm ci
npm run build
firebase deploy --only hosting --project pastel-carioca-site
```

O `firebase.json` publica a pasta `dist/` e reescreve todas as URLs para `/index.html` (SPA).

O `index.html` e os arquivos ficam em cache por 1 hora no navegador de quem visita (padrão do Firebase, ainda sem cabeçalhos customizados). Depois de um deploy, quem abriu o site na última hora pode ver a versão antiga até recarregar.

Toda publicação em produção é registrada como uma **change** (`CHGNNNN`) no ai-memory do projeto, com plano, backup, rollback, evidências antes e depois. Backups, logs e prints ficam em `changes/`, que está no `.gitignore` e não vai para o git.

### Automático (GitHub Actions) — ainda não ativo

[.github/workflows/firebase-hosting.yml](.github/workflows/firebase-hosting.yml) builda e publica no canal `live` a cada push em `main`. Para funcionar, o dono do repositório precisa:

1. Criar o secret `FIREBASE_SERVICE_ACCOUNT_PASTEL_CARIOCA_SITE` no repositório (Settings → Secrets and variables → Actions). A forma mais segura é rodar `firebase login` e `firebase init hosting:github` num clone do repositório, sem aceitar gerar workflow novo.
2. Desabilitar o GitHub Pages (Settings → Pages), que ainda está habilitado.

Até isso ser feito, **um push em `main` falha no deploy e pode republicar o GitHub Pages**. Detalhes no item 4 de [roadmap-seguranca.md](roadmap-seguranca.md).

## Segurança

Não há segredos no código nem no bundle. O formulário de pedido não envia dados para servidor nenhum. As dependências estão sem advisories (`npm audit` = 0). O que ainda falta (cabeçalhos de segurança, cache, privacidade, acessos) está em [roadmap-seguranca.md](roadmap-seguranca.md).

## Editando o código

- **Pelo IDE:** clone o repositório, crie um branch, faça as alterações e abra um PR para `main`.
- **Pelo Lovable:** o projeto original está no link acima e commita neste repositório. Antes da virada de hospedagem, mudanças feitas pelo Lovable e a publicação no Firebase são caminhos separados; confirme com o Paul qual é o fluxo definitivo.
