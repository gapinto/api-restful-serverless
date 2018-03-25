API restfull com serverless, nodeJs e lambda aws

Breve descrição do que é serverless
Serverless é uma arquitetura orientada a eventos também conhecida como plataforma de função como serviço (FaaS), seu objetivo é deixar nós desenvolvedores livres da gerencia de infrastrutura, e focar no que realmente interessa.


Neste tutorial irei apresentar de forma rápida e prática como podemos criar uma api restfull

Pré-requisitos

Node - para instalação utilizo o nvm com ele você pode trabalhar com várias versões do node.

https://github.com/creationix/nvm

Criar uma conta na amazon

https://portal.aws.amazon.com/billing/signup#/start

Criar um usuário no IAM adicionando a permissão (AdministratorAccess)

https://console.aws.amazon.com/iam/home?region=us-west-2#/home

Client AWS - Permitirá o deploy pelo prompt

https://docs.aws.amazon.com/pt_br/cli/latest/userguide/installing.html

PostMan - Servirá para testarmos requisições a nossa API

Serverless

npm i -g serverless

Configurando seu serverless

link

Configurando compilação do typescript

link

Arquivo onde fica todas as dependências do seu projeto

link

Estrutura de nossa aplicação restfull

Executando sua aplicação localmente

1- Abra no prompt de comando a pasta onde se encontra o serverless.yml
2- Instale as dependências de sua api: npm install
3- Digite: sls offline

Pronto todos os endpoints foram criados para testar utilize o postMan

Para fazer o deploy da sua aplicação

1- Abra no prompt de comando a pasta onde se encontra o serverless.yml

2- Digite: sls deploy

Onde posso ver minhas funções no console da amazon?

print






