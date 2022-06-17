# Frontend Online Store

Frontend Online Store é uma loja online na qual é possível buscar produtos por termos ou categorias, visualizar os detalhes do item selecionado e adicionar os produtos encontrados ao carrinho de compras. Além disso, dentro do carrinho de compras, é possível manipular a quantidade dos produtos adicionados ou excluí-los caso não haja mais interesse na compra.

A aplicação foi desenvolvida em conjunto com [Gabriel Augusto](https://github.com/gabriel-am12) e [Phillipe Pacheco](https://github.com/Phillipe153) como um meio de praticar as metodologias ágeis Scrum e Kanban. Cada membro ficou responsável pelo desenvolvimento de uma parte da aplicação e eu fui responsável pelas funcionalidades de:

- listagem das categorias de produtos;
- exibição dos produtos da categoria selecionada;
- tela de detalhes de um produto;
- redirecionamento para a tela de detalhes a partir da busca por produtos;
- adição de um produto ao carrinho de compras na tela de detalhes do produto;
- exibição dos produtos adicionados ao carrinho de compra; e
- manipulação da quantidade dos produtos adicionados ao carrinho.

## Tecnologias utilizadas

O projeto foi desenvolvido utilizando a biblioteca React, incluindo o React Router para roteamento. Além disso, foi utilizado a [API do Mercado Livre](https://developers.mercadolivre.com.br/pt_br/itens-e-buscas) para obter os produtos à venda.

## Instalação das dependências

Você precisará de um ambiente de execução [Node.js](https://nodejs.org) instalado em sua máquina para executar o comando de instalação de dependências.

Com o repositório clonado e dentro de um terminal:

1. Entre na pasta do repositório:

```
cd frontend-online-store/
```

2. Instale as dependências:

```
npm install
```

## Como executar

Para iniciar a aplicação, execute no terminal:

```
npm start
```

---
