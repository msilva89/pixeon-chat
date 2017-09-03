(function () {
    var hidden = "hidden";
    if (hidden in document) document.addEventListener("visibilitychange", onchange);
    else if ((hidden = "mozHidden") in document) document.addEventListener("mozvisibilitychange", onchange);
    else if ((hidden = "webkitHidden") in document) document.addEventListener("webkitvisibilitychange", onchange);
    else if ((hidden = "msHidden") in document) document.addEventListener("msvisibilitychange", onchange);
    else if ('onfocusin' in document) document.onfocusin = document.onfocusout = onchange;
    else window.onpageshow = window.onpagehide = window.onfocus = window.onblur = onchange;

    function onchange(evt) {
        var evtMap = {
            focus: true,
            focusin: true,
            pageshow: true,
            blur: false,
            focusout: false,
            pagehide: false
        };

        evt = evt || window.event;
        if (evt.type in evtMap) evtMap[evt.type] ? functionVisible() : functionHidden();
        else this[hidden] ? functionHidden() : functionVisible();
    }

    function functionVisible() {
        console.log('Visible');
    }

    function functionHidden() {
        var intervalo = window.setInterval(logout, 30000);
        function logout() {
            document.getElementById('sair').click();
            $('#btOut').hide();
            window.alert("Desconectado");
        }
    }
})();