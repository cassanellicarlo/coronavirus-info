$(function() {

    $('#salvaPreferiti').click( () =>{
        $('#preferitiModal').modal('hide');

        localStorage.clear();

        let regionePreferita = $("#formRegioni").val();
        localStorage.setItem('regione', regionePreferita);

        let provinciaPreferita = $("#formProvince").val();
        if(provinciaPreferita!='' && provinciaPreferita!=undefined)
        localStorage.setItem('provincia', provinciaPreferita);

        $("#selezione-tab").show();
        $("#tab-regione").html(regionePreferita);
        $("#tab-provincia").html(provinciaPreferita);

        scaricaDatiRegioniProvince();
    });

});
