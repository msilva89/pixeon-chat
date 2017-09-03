chat.controller('loginCtrl', ['$scope', '$http', 'loginAPI', '$location', function ($scope, $http, loginAPI, $location) {

    $scope.desabilitar = true;
    $scope.desabilitarGoogle = false;
    $scope.usuarioLog;
    $scope.usuario;

    $scope.init = () => {
        gapi.load('auth2', function () {

            auth2 = gapi.auth2.init({
                //nesse exemplo o client id também pode ser informado pela meta tag "google-signin-client_id"
                //caso ele não seja informado aqui
                client_id: '521456789615-kuubau3o5g6npnkal85r0lpvetp82e9e.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
                scope: 'profile email' // solicitando acesso ao profile e ao e-mail do usuário
            });
            auth2.attachClickHandler(document.getElementById('customBtn'), {}, $scope.login, $scope.onFailure);
        });
    };

    /**
      Função executada quando ocorrer falha no logn
    */
    $scope.onFailure = (error) => {
        console.log(error);
    }

    $scope.login = (googleUser) => {
        // Recuperando o profile do usuário
        var profile = googleUser.getBasicProfile();
        // Recuperando o token do usuario. Essa informação você necessita passar para seu backend
        var id_token = googleUser.getAuthResponse().id_token;

        usuario = {
            "givenName": profile.getGivenName(),
            "name": profile.getName(),
            "id": profile.getId(),
            "imageUrl": profile.getImageUrl()
        };

        loginAPI.login(usuario).then(
            (sucess) => {
                $scope.desabilitar = !$scope.desabilitar;
                $scope.desabilitarGoogle = !$scope.desabilitarGoogle;
                loginAPI.setUsuarioLogado(usuario);
                $scope.usuarioLog = usuario;
                $location.path('/chat');
            }, (error) => {
                console.log(error);
            });
    }

    $scope.logout = function () {
        var usuario = loginAPI.getUsuarioLogado();
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(() => {
            loginAPI.logout(usuario).then(
                (sucess) => {
                    $scope.desabilitar = !$scope.desabilitar;
                    $scope.desabilitarGoogle = !$scope.desabilitarGoogle;
                    $location.path('/welcome');
                }, (error) => {
                    console.log(error);
                });
        });
    }

    $scope.disableBtn = () => {
        if ($scope.usuarioLog)
            $scope.desabilitar = true;
        else
            $scope.desabilitarGoogle = false;
    }
    $scope.disableBtn();
    $scope.init();

}]);