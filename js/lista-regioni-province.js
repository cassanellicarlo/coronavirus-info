$(function() {

    let urlRegioni = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json";
    let urlProvince = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province-latest.json";

    $.getJSON(urlRegioni, function (data) {
        
        let regioni = data.map((item)=> item.denominazione_regione);

        regioni.forEach((regione) => {
            $("#formRegioni").append(`<option value='${regione}'>${regione}</option>`);
        });

        $("#formRegioni").change(function() {
            let regioneSelezionata = $("#formRegioni").val();
            $("#formProvince").empty();
            $("#formProvince").append("<option selected disabled value='Nessuna'>Seleziona Provincia</option>");
            $('#salvaPreferiti').prop('disabled', false);

            $.getJSON(urlProvince, function (data) {
                
                let province = data.filter((item)=> item.denominazione_regione === regioneSelezionata && item.denominazione_provincia!="In fase di definizione/aggiornamento");
                
                province.forEach((provincia) => {
                    $("#formProvince").append(`<option value=${provincia.denominazione_provincia}>${provincia.denominazione_provincia}</option>`);
                });


            });
        });

    });
});
