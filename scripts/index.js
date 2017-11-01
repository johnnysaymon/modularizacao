requirejs.config({
    baseUrl: 'scripts/functions'
});

requirejs(["writer", "alerter", "time/calendar"], function(writer, alerter, calendar) {
    writer("Maike");
    alerter.defaultAlert();
    alerter.callAlert("Alerta customizado");
    calendar.showTime();
});
