# pixeon-chat


<<<<<<< HEAD
## SPQ
=======
## SPA
>>>>>>> 4f9bd3697bb6d48cc4702a1354bcc7eea7bea8b8

https://hipsters.tech/single-page-applications-hipsters-16/

Basicamente uma aplicação SPA significa você codificar menos no server-side e mais no client-side, 
mas como isso? A aplicação estará quase toda no cliente, sendo que assim que o usuário acesso o site a aplicação e seus templates são armazenados no lado cliente, 
muito diferente da forma tradicional, onde o usuário visita várias páginas diferentes.
<<<<<<< HEAD

=======
>>>>>>> 4f9bd3697bb6d48cc4702a1354bcc7eea7bea8b8
As aplicações e os sites SPA, fazem uma transição entre os templates carregados, 
sem reload de página e sem que o usuário viaje de uma página para outra. Eu até sabia o que era e como diferenciar, 
mas eu particularmente sempre disse que não gostava desse tipo de aplicação. Um dos motivos era com relação a indexação no Google. 
Eu não tinha ideia de como a indexação era feita, já que  navegamos pelo sistema através de requisições AJAX. Até um tempo atrás o Google não indexava JavaScript. 
O outro motivo era o mesmo de muitos: eu não tinha motivo e não queria sair da minha zona de conforto. 
(se tem algo que aprendi nos últimos meses é que nunca devemos estacionar na zona de conforto então se você está na zona de conforto, saia dela).

<<<<<<< HEAD

## REST

=======
## REST
>>>>>>> 4f9bd3697bb6d48cc4702a1354bcc7eea7bea8b8
REST é acrônimo de Representational State Transfer, e tem como objetivo primário a definição de características fundamentais para a construção de aplicações Web seguindo boas práticas.
A Web como a conhecemos hoje, funciona seguindo práticas REST, e para entendermos melhor, vamos considerar o exemplo abaixo:
1. Você entra com um endereço em seu navegador (Chrome, Firefox, Edge, etc).
2. Seu navegador estabelece uma conexão TCP/IP com o servidor de destino e envia uma requisição GET HTTP com o endereço que você digitou.
3. O servidor interpreta sua requisição e de acordo com o que foi solicitado, uma resposta HTTP é retornada ao seu navegador.
4. A resposta retornada pode ser de sucesso, contendo alguma representação em formato HTML, ou pode ser algum erro, como por exemplo o famoso 404 Not Found, que indica que o endereço/recurso que você solicitou não pôde ser encontrado.
5. Em caso de sucesso, o seu navegador interpreta o HTML e você consegue navegar pela página renderizada.

<<<<<<< HEAD


para executar localmente

```npm
	npm install
```
=======
## Para executar localmente
1º Verificar se voce tem instalado o [Play Framework](https://www.playframework.com/)
    Entre na pasta ```serviceCode/ChatPixeonService``` execute o comando ```sbt run``` e aguarde...
    
2º Entre na pasta ```pixeon-chat``` e execute para baixar as dependência ```npm install``` logo apos execute ```node server.js```
irar criar um pequeno servidor de aplicação na porta 80, caso queira trocar a porta edite o arquivo ```server.js``` linha 55 
```}).listen(PORTA);```
logo apos acesse http://localhost/pixeon-chat/
caso não tenho o [NodeJs](https://nodejs.org/en/), baixa qualquer outro web container [Tomcat](https://tomcat.apache.org/download-80.cgi) ou [XAMPP](https://www.apachefriends.org/pt_br/index.html), porem você deverar fazer o deploy manualmente.

3. Descrever o relatório com no mínimo os seguintes tópicos:

* a. Um pequeno parágrafo sobre Single Page Application (SPA); 
   * Feito a cima
* b. Um paragrafo sobre Restful Services ou Resource-oriented Architecture;
   * Feito a cima
* c. Descreva como você hospedaria sua aplicação para ser acessada por seus
clientes;
   * Hospedaria em alguma cloud com docker e afins
    
* d. Descreva o trabalho realizado;
  *  Foi feito um chat de conversa para empresa [Pixeon](http://pixeon.com.br/)
* e. Escolhas importantes realizada no percurso;
   * Não tive escolhas importantes, apenas me arrependo de ter escolhido [angular-chat](https://github.com/stephenlb/angularjs-chat),
       ou não vi toda sua api.
       
* f. Facilidades e Dificuldades
  * Facilidades o front-end foi bem tranquilo muito material na web para pesquisa
       Dificuldade não conhecia o [Play Framework](https://www.playframework.com/), foi um pouco dificl no começo, mas como ja tenho
       experiência com java me facilitou, porem não utilizaria este framework para a construção do chat, prefiro optar pelo 
       [Spring Boot](https://projects.spring.io/spring-boot/) por toda sua versatilidade

>>>>>>> 4f9bd3697bb6d48cc4702a1354bcc7eea7bea8b8
