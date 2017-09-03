var usuario;

/**
  Função para iniciar o app
*/
var startApp = function () {
    gapi.load('auth2', function () {
        auth2 = gapi.auth2.init({
            //nesse exemplo o client id também pode ser informado pela meta tag "google-signin-client_id"
            //caso ele não seja informado aqui
            client_id: '521456789615-kuubau3o5g6npnkal85r0lpvetp82e9e.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
            scope: 'profile email' // solicitando acesso ao profile e ao e-mail do usuário
        });
        auth2.attachClickHandler(document.getElementById('customBtn'), {}, onSuccess, onFailure);
    });
};

/**
  Função executada quando o login é efetuado com sucesso
*/
function onSuccess(googleUser) {
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

    //  setCookie(usuario);

    $.when(
        $.ajax({
            url: window.url + '/login',
            type: 'POST',
            data: JSON.stringify(usuario),
            contentType: "application/json; charset:ISO-8859-1",//utf-8",   
            success: (data) => {
                //sucess
                //console.log(data)
            }
        })
    ).then(function () {
        /* Run after all AJAX */
        $('#btOut').show();
        document.getElementById('chat').click();
        // $('#btIn').hide();
        // $('#customBtn').hide();

    });
}


function setCookie(usuario) {
    var val = JSON.stringify(usuario);
    //set cookie date expired
    var date = new Date();
    date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toGMTString();
    //create cookie
    document.cookie = "usuario=" + val + expires;

    //pegar o cookie
    //    var json = JSON.parse(getCookie('usuario'));
    //  console.log(json);
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

/**
  Função executada quando ocorrer falha no logn
*/
function onFailure(error) {
    console.log(error);
}

/**
  Função de deslogar o usuario
*/
// function signOut() {
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//         $.when(
//             $.ajax({
//                 url: window.url + '/logout',
//                 type: 'POST',
//                 data: JSON.stringify(usuario),
//                 contentType: "application/json; charset:ISO-8859-1",//utf-8",   
//                 success: function (data) {
//                     console.log("logout realizado")
//                 }
//             })
//         ).then(function () {
//             /* Run after all AJAX */
//             document.getElementById('sair').click();
//             // location.reload();
//         });
//     });
// }