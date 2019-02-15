function formatarCampos() {

    $('.format-date').mask("99/99/9999");
    $('.format-date').css("text-align", 'right');

    $('.format-phone').mask("(99) 99999-9999");
    $('.format-phone').css("text-align", 'right');



    $('.format-integer').css("text-align", 'right');
    $('.format-integer').maskMoney({ allowZero: false, allowNegative: false, defaultZero: false, precision: 0, thousands: "", affixesStay: false });

    $('.format-money').attr("data-decimal", ',');
    $('.format-money').attr("data-thousands", '.');
    $('.format-money').css("text-align", 'right');
    $('.format-money').maskMoney();

}

function formatarMoedaUS(valor) {

    if (valor == "") {
        return 0;
    } else {
        return parseFloat(valor.replace(/\./g, '').replace(',', '.'));
    }
}

function formatarMoeda(valor) {
    return accounting.formatMoney(valor, "", 2, ".", ",");
}

function AbrirModal(title, body) {
    
    $("#myModalLabel").text(title);
    $(".modal-body").text(body);
    $('#myModal').modal('show');
}

function AbrirModalYesNo(title, body) {

    $("#myModalYesNoLabel").text(title);
    $(".modal-body").text(body);
    $('#myModalYesNo').modal('show');
}

function isDate(txtDate) {
    var currVal = txtDate;
    if (currVal == '')
        return false;

    var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
    var dtArray = currVal.match(rxDatePattern); // is format OK?

    if (dtArray == null)
        return false;

    dtMonth = dtArray[1];
    dtDay = dtArray[3];
    dtYear = dtArray[5];

    if (dtMonth < 1 || dtMonth > 12)
        return false;
    else if (dtDay < 1 || dtDay > 31)
        return false;
    else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31)
        return false;
    else if (dtMonth == 2) {
        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
        if (dtDay > 29 || (dtDay == 29 && !isleap))
            return false;
    }
    return true;
}