$("#btnSumar").click(function(){
    var numero1 = $("#numero1").val();
    var numero2 = $("#numero2").val();
    var total = Number(numero1) + Number(numero2);

    ons.notification.toast("La sumatoria es  " + total, {timeout: 2000});
});

$("#btnLimpiar").click(function(){
    $("#numero1").val("");
    $("#numero2").val("");
});
