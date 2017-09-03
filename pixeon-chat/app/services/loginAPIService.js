chat.service('loginAPI', function ($http, configUrl) {

    var _login = (usuario) => {
        var metodo = 'POST';
        return $http({
            method: metodo,
            url: configUrl.baseUrl + '/login',
            data: JSON.stringify(usuario)
        });

    };

    var _logout = (usuario) => {
        var metodo = 'POST';
        return $http({
            method: metodo,
            url: configUrl.baseUrl + '/logout',
            data: JSON.stringify(usuario)
        });
    };

    var usuario;

    var _setUsuarioLogado = (usuarioLogado) => {
        usuario = usuarioLogado;
    }

    var _getUsuarioLogado = () => {
        return usuario;
    }

    return {
        login: _login,
        logout: _logout,
        getUsuarioLogado: _getUsuarioLogado,
        setUsuarioLogado: _setUsuarioLogado
    };
});