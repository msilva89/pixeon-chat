chat.config(function ($routeProvider, $locationProvider) {

    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode({ enabled: false, requireBase: false });

    $routeProvider.when("/chat", {
        templateUrl: "view/chat.html",
        controller: "chatCtrl",
        resolve: {
            listUsers: (chatAPI) => {
                return chatAPI.getListUsers();
            }
        }
    }).when("/welcome", { 
        templateUrl: "view/welcome.html"
    }).when("/singIn", {
        controller: "loginCtrl"
    });
    $routeProvider.otherwise({ redirectTo: "/welcome" });
});