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
