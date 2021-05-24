# App Vegetables&Fruits-Aplicativo de venda online de fruitas e legumes


[Projeto](https://github.com/BarryMBarque/ApiVegetable)produzido pelo aluno [Barry Malick Barque](https://github.com/BarryMBarque) como parte da complementação de carga horária da disciplina de Tecnologia em Desenvolvimento de Sistemas do 6º período do Curso de Ciência da Computação, da Universidade Tecnológica Federal do Paraná - UTFPR Medianeira, sob a orientação do professor [Everton Coimbra de Araújo](https://github.com/evertonfoz).


A Api foi desenvolvido em node.js, utilzando a linguagem Typescript e foi utilizada a IDE visual Studio Code


## Començando
Para fazer o useo do Api, algumas ferramentas serão necessárias:

* [Node.js](https://nodejs.org/pt-br/download/package-manager/) Necessário para a compilação do código;
* [Android Studio](https://developer.android.com/studio): Flutter depende de uma instalação completa das dependências do Androis Studio para funcionar;
* [Docker](https://www.docker.com/get-started) O dcker sera necessário para a criação da imagem para o banco de dados
*[Postgres](https://hub.docker.com/_/postgres) Precise-se da imagem do postgres no docker

Ex: docker run  --name nome_do_conatiner -e POSTGRES_PASSWORD=senha -p 5432:5432 -d postgres

*[DBeaver](https://dbeaver.com/download/) Criar uma Base de Dados com Nome "loja_hadi" conectada na porta 5432 
* Um emulador ou dispositivo físico para executar a aplicação;
  * Se preferir um emulador, pode usar o do próprio Adroid Studio: [Android Emulator](https://developer.android.com/studio/run/emulator?hl=pt-br);
  * Se for utilizar o seu dispositivo, [esse tutorial pode ser útil](https://developer.android.com/studio/run/device?hl=pt-br).

## Arquivo .env.example 
Mostra as configurações do projeto tanto em desenvolvimento tanto em produção

  
## Executando
* execute o comando Yarn para baixar as dependencias necessárias

* excutar yarn dev:server para rodar a API

## Funcionalidades
* API para para venda de  produto online:
  * Permite Gerenciar os clientes;
  * Cadastrar e Fazer pedidos dos produtos
  
## Arquitetura
* O projeto é dividido em 3 pasta principais 
  * config: É a pasta onde fica as principais configurções para (upload de arquivos, envio de email, authentificação);
   
  * modules: É onde fica os modulos principais (Adresses, Users, Products etc...).
  
  * shared: é onde fica as configurções globais da API
