# App Vegetables&Fruits-Aplicativo de venda online de fruitas e legumes


[Projeto](https://github.com/BarryMBarque/ApiVegetable)produzido pelo aluno [Barry Malick Barque](https://github.com/BarryMBarque) como parte da complementação de carga horária da disciplina de Tecnologia em Desenvolvimento de Sistemas do 6º período do Curso de Ciência da Computação, da Universidade Tecnológica Federal do Paraná - UTFPR Medianeira, sob a orientação do professor [Everton Coimbra de Araújo](https://github.com/evertonfoz).


A Api foi desenvolvido em node.js, utilzando a linguagem Typescript e foi utilizada a IDE visual Studio Code


## Començando
Para fazer o uso do Api, algumas ferramentas serão necessárias:

* [Node.js](https://nodejs.org/pt-br/download/package-manager/) Necessário para a compilação do código;
* [Docker](https://www.docker.com/get-started) O docker sera necessário para a criação da imagem para o banco de dados
[Postgres](https://hub.docker.com/_/postgres) Precisa-se da imagem do postgres no docker

Ex: docker run  --name nome_do_conatiner -e POSTGRES_PASSWORD=senha -p 5432:5432 -d postgres

* [DBeaver](https://dbeaver.com/download/) Criar uma Base de Dados com Nome "loja_hadi" conectada na porta 5432 



## Arquivo .env.example 
Mostra as configurações do projeto tanto em desenvolvimento tanto em produção

  
## Executando
* execute o comando Yarn para baixar as dependencias necessárias

* execute yarn dev:server para rodar a API

## Funcionalidades
* API para para venda de  produto online:
  * Permite Gerenciar os clientes;
  * Cadastrar e Fazer pedidos dos produtos
  
## Arquitetura
* O projeto é dividido em 3 pastas principais 
  * config: É a pasta onde fica as principais configurções para (upload de arquivos, envio de email, authentificação);
   
  * modules: É a pasta onde fica os modulos principais (Adresses, Users, Products etc...).
  
  * shared: É a pasta onde fica as configurções globais da API
