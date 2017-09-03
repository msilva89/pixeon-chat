chat.controller('chatCtrl',
    ['Messages', '$scope', '$http', '$q', '$filter', 'chatAPI', 'listUsers', 'loginAPI',
        function (Messages, $scope, $http, $q, $filter, chatAPI, listUsers, loginAPI) {

            $scope.listUsers = listUsers.data;
            $scope.usuario = loginAPI.getUsuarioLogado();

            $scope.init = () => {
                var deferred = $q.defer();

                chatAPI.getUser().
                    then(
                    (response) => {
                        deferred.resolve(response.data);
                    }, (error) => {
                        console.log(error);
                    });

                return deferred.promise;
            };


            $scope.init().then((json) => {
                $scope.messages = [];
                $scope.userName = json.name;
                $scope.givenName = json.givenName;
                $scope.userJson = json;
                $scope.img = json.imageUrl;
                // // Receive Messages
                Messages.user({ name: json.givenName, img: $scope.userJson.imageUrl });
                Messages.receive((message) => {

                    $scope.messages.push(message);
                });

                // Send Messages
                $scope.send = () => {
                    $scope.dataFormatada = $filter('date')(new Date(), 'dd/MM/yyyy HH:MM:ss');
                    Messages.send({ data: $scope.textbox, dataFormatada: $scope.dataFormatada });
                    $scope.textbox = "";
                };
            });

            $scope.init();
        }]);