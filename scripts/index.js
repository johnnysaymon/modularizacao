require(["functions/writer", "functions/alerter", "functions/time/calendar"], function(writer, alerter, calendar) {
    writer("Maike");
    alerter.defaultAlert();
    alerter.callAlert("Alerta customizado");
    calendar.showTime();
});
