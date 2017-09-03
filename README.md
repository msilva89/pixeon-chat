# pixeon-chat


## SPQ

https://hipsters.tech/single-page-applications-hipsters-16/

Basicamente uma aplicação SPA significa você codificar menos no server-side e mais no client-side, 
mas como isso? A aplicação estará quase toda no cliente, sendo que assim que o usuário acesso o site a aplicação e seus templates são armazenados no lado cliente, 
muito diferente da forma tradicional, onde o usuário visita várias páginas diferentes.

As aplicações e os sites SPA, fazem uma transição entre os templates carregados, 
sem reload de página e sem que o usuário viaje de uma página para outra. Eu até sabia o que era e como diferenciar, 
mas eu particularmente sempre disse que não gostava desse tipo de aplicação. Um dos motivos era com relação a indexação no Google. 
Eu não tinha ideia de como a indexação era feita, já que  navegamos pelo sistema através de requisições AJAX. Até um tempo atrás o Google não indexava JavaScript. 
O outro motivo era o mesmo de muitos: eu não tinha motivo e não queria sair da minha zona de conforto. 
(se tem algo que aprendi nos últimos meses é que nunca devemos estacionar na zona de conforto então se você está na zona de conforto, saia dela).


## REST

REST é acrônimo de Representational State Transfer, e tem como objetivo primário a definição de características fundamentais para a construção de aplicações Web seguindo boas práticas.
A Web como a conhecemos hoje, funciona seguindo práticas REST, e para entendermos melhor, vamos considerar o exemplo abaixo:
1. Você entra com um endereço em seu navegador (Chrome, Firefox, Edge, etc).
2. Seu navegador estabelece uma conexão TCP/IP com o servidor de destino e envia uma requisição GET HTTP com o endereço que você digitou.
3. O servidor interpreta sua requisição e de acordo com o que foi solicitado, uma resposta HTTP é retornada ao seu navegador.
4. A resposta retornada pode ser de sucesso, contendo alguma representação em formato HTML, ou pode ser algum erro, como por exemplo o famoso 404 Not Found, que indica que o endereço/recurso que você solicitou não pôde ser encontrado.
5. Em caso de sucesso, o seu navegador interpreta o HTML e você consegue navegar pela página renderizada.



para executar localmente

```npm
	npm install
```