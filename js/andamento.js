$(function() {

    let url = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json";

    $.getJSON(url, function (data) {
        let numeri = data[0];

        $("#totale-casi").html(numeri["totale_casi"]);
        $("#attualmente-positivi").html(numeri["totale_attualmente_positivi"]);
        $("#deceduti").html(numeri["deceduti"]);
        $("#guariti").html(numeri["dimessi_guariti"]);
        $("#data").html(numeri["data"]);
    });
});
