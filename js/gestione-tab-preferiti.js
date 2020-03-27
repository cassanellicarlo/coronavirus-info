$(function() {

    let regionePreferita = localStorage.getItem('regione');
    let provinciaPreferita = localStorage.getItem('provincia');

    if(regionePreferita){
        $("#selezione-tab").show();
    }

    $("#tab-regione").click(()=>{
        $("#tab-regione").addClass("active");
        $("#tab-italia").removeClass("active");
        $("#tab-provincia").removeClass("active");
        $("#italia").hide();
        $("#provincia").hide();
        $("#regione").show();
    })

    $("#tab-provincia").click(()=>{
        $("#tab-regione").removeClass("active");
        $("#tab-italia").removeClass("active");
        $("#tab-provincia").add("active");
        $("#italia").hide();
        $("#regione").hide();
        $("#provincia").show();
    })

    $("#tab-italia").click(()=>{
        $("#tab-regione").removeClass("active");
        $("#tab-italia").addClass("active");
        $("#tab-provincia").removeClass("active");
        $("#regione").hide();
        $("#provincia").hide();
        $("#italia").show();
    })

});
