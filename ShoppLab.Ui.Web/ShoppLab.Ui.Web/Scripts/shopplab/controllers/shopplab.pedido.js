
function salvar() {


    var form = $("form-pedido").serializeObject();
    $.ajax({ url: "/Pedido/Cadastrar", data: { idProjeto: idProjeto, idStatus: idStatusTipoProjeto } }).success(function (data) {

    });

}

function validarCampos() {

}