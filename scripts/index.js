requirejs.config({
    baseUrl: 'scripts/functions'
});

requirejs(["writer", "alerter", "time/calendar"], function() {
    write("Maike")
    defaultAlert()
    callAlert("Alerta customizado")
    showTime()
});
