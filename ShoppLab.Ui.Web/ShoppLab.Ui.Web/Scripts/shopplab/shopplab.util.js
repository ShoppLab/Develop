function formatFields() {

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


