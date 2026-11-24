# Biblioteca Digital

## Sobre o projeto

A Biblioteca Digital é uma aplicação web desenvolvida como projeto final da disciplina de Tecnologia para Front-End Avançado do UNIESP.

O projeto tem como objetivo proporcionar uma interface intuitiva e responsiva para pesquisa, visualização e consulta de informações sobre livros, utilizando dados provenientes de uma API externa.

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- Material UI (MUI)
- React Router DOM
- Emotion
- HTML e CSS
- Git e GitHub
- Trello

## Funcionalidades previstas

- Pesquisa de livros.
- Listagem de livros em cards.
- Visualização de detalhes dos livros.
- Navegação entre páginas.
- Consumo de API externa.
- Tratamento de erros e estados de carregamento.
- Interface responsiva.
- Tema visual personalizado.
- Página de informações sobre o projeto.
- Tratamento de rotas inexistentes.

## Como executar o projeto

### Pré-requisitos

- Node.js
- npm
- Git

### Instalação

Clone o repositório:

```bash
git clone https://github.com/devmauro107/projeto_final-p2_front-end_avancado_uniesp.git
```

Acesse a pasta do projeto:

```bash
cd projeto_final-p2_front-end_avancado_uniesp
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
npm run dev
```

Acesse no navegador o endereço informado pelo Vite, normalmente:

http://localhost:5173

### Build do projeto

```bash
npm run build
```

### Verificação de código

```bash
npm run lint
```

## Estrutura planejada do projeto

```text
src/
├── assets/
├── components/
│   ├── BookCard/
│   ├── Header/
│   └── Footer/
├── pages/
│   ├── Home/
│   ├── Details/
│   └── About/
├── routes/
│   └── AppRoutes.tsx
├── services/
├── types/
├── theme/
│   └── theme.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Rotas da aplicação

| Rota | Descrição |
|---|---|
| / | Página inicial |
| /livro/:id | Detalhes de um livro |
| /sobre | Informações sobre o projeto |
| * | Página não encontrada |

## Arquitetura

O projeto utiliza uma arquitetura organizada por responsabilidades, separando componentes reutilizáveis, páginas, serviços de comunicação com a API, tipagens, rotas e configurações globais.

O Material UI é utilizado como biblioteca de componentes, juntamente com um tema personalizado para garantir consistência visual em toda a aplicação.

O React Router DOM é responsável pela navegação entre as páginas, incluindo rotas dinâmicas para a visualização dos detalhes dos livros.

## API externa

API de consulta de livros — identificação a ser confirmada pela equipe responsável pela integração.

## Organização e desenvolvimento

O desenvolvimento é realizado de forma colaborativa, utilizando Git, GitHub e Trello para organização das tarefas, controle de versões e acompanhamento do progresso.

Cada integrante é responsável por uma parte específica do projeto, desenvolvida em sua respectiva branch.

| Responsabilidade | Branch planejada |
|---|---|
| Arquitetura e configuração | feature/integrante-1-setup |
| Serviços e tipagem | feature/integrante-2-api |
| Home e listagem | feature/integrante-3-home |
| Detalhes | feature/integrante-4-details |
| Sobre e componentes globais | feature/integrante-5-about |

## Integrantes

- Marcelo Pereira de Figueiredo Filho
- Mauro Sergio Souza de Oliveira
- Samantha Hellen da Cunha Lima
- João Lucas Pereira Monteiro
- Letícia Santos de Lima

## Informações acadêmicas

- Instituição: UNIESP
- Disciplina: Tecnologia para Front-End Avançado
- Professor: Álekiss Mélo
- Ano: 2026

---

Projeto desenvolvido para fins acadêmicos.