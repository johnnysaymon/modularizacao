define(function(){

    function callAlert(text) {
        alert(text);
    }

    function defaultAlert() {
        alert("Este é o alerta padrão")
    }

    return {
        'callAlert': callAlert,
        'defaultAlert': defaultAlert,
    }
});
