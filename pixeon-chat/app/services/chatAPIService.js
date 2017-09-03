chat.service('chatAPI', function ($http, configUrl) {

    var _getListUsers = () => {
        return $http.get(configUrl.baseUrl + "/getListUsers");
    };

    var _getUser = () => {
        return $http.get(configUrl.baseUrl + "/getUser");
    };

    return {
        getListUsers: _getListUsers,
        getUser: _getUser
    };
});