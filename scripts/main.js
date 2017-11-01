requirejs.config({
    paths: {
        "packageTest": ["packages/packageTest"]
    }
});

require(["packageTest"], function(packageTest){
    packageTest.writer("Maike");
    packageTest.alerter.defaultAlert();
    packageTest.alerter.callAlert("Alerta customizado");
    packageTest.calendar.showTime();
})
