

scaricaDatiRegioniProvince();

function scaricaDatiRegioniProvince(){

    $(function() {  
        let urlRegioni = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json";

        let regionePreferita = localStorage.getItem('regione');

        if(regionePreferita){
            $("#tab-regione").html(regionePreferita);

            $.getJSON(urlRegioni, function (data) {
                var numeri = data.filter((regione) => regione.denominazione_regione === regionePreferita)[0];

                $("#totale-casi-regione").html(numeri["totale_casi"]);
                $("#attualmente-positivi-regione").html(numeri["totale_positivi"]);
                $("#deceduti-regione").html(numeri["deceduti"]);
                $("#guariti-regione").html(numeri["dimessi_guariti"]);
                $("#data-regione").html(numeri["data"]);
            });
        }

        let urlProvince = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province-latest.json";

        let provinciaPreferita = localStorage.getItem('provincia');

        if(provinciaPreferita){
            $("#tab-provincia").html(provinciaPreferita);

            $.getJSON(urlProvince, function (data) {
                var numeri = data.filter((provincia) => provincia.denominazione_provincia === provinciaPreferita)[0];
        
                $("#totale-casi-provincia").html(numeri["totale_casi"]);
            });
        }

    });

}
