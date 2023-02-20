# SpaceX Launches React

Este projeto é a parte front-end que consome uma api integrada em ruby da SpaceX e mostra os resultados em tela, também está com o Google Optimize integrado realizando testes A/B. Este projeto full-stack foi feito em um dia, acredito que poderia ter melhorias porém como estava viajando meu tempo ficou curto.

# Especificações

* Para criação deste projeto utilizei o boiler plate `create-react-app` e a versão do node é a `16.15.0`.
* Foi utilizado `typescript`.
* Para estilização foi utilizada a biblioteca `styled-components`.

# Iniciando a aplicação

Para iniciar a aplicação é necessário que você possua o `node` instalado em sua máquina.

* Para que os testes A/B do Google Optimize funcionassem, eu precisei criar um alias para o meu localhost. Assim como a documentação enviada eu optei por utilizar o endereço `http://localhost.com:3000/`. 

* Instale as dependências do projeto, caso você esteja usando o `npm` basta digitar `npm install` no terminal e na raiz do projeto. Se estiver utilizando o `yarn`, basta utilizar o comando `yarn`.

* Após a instalação, basta rodar o comando `npm start` ou `yarn start`.

* Certifique que o projeto em `Ruby` esteja rodando sem problemas, caso o contrário as APIs não funcionarão e isso poderá quebrar a página.

# Testes

* Para mockar os dados da API no teste eu fiz uso da biblioteca [msw](https://www.npmjs.com/package/msw). Caso você queira rodar o projeto em ruby em uma porta diferente da `5000`, lembre de editar o arquivo `endpoints.ts` com a url e porta em que o projeto em ruby está rodando, caso o contrário os testes irão falhar. Normalmente em projetos que rodam em produção estas informações ficam em variáveis de ambientes e não são informações que mudam frequentemente, não tendo a necessidade de ficar tão atento a estes detalhes.

# Errata

* Eu consegui gerar um relatório do optimize após o envio do teste -> [Relatório do Optimize de Visualizações de página_20230220_175858.csv](https://github.com/leonardovalverde/space-x-launches-react/files/10787731/Relatorio.do.Optimize.de.Visualizacoes.de.pagina_20230220_175858.csv)
