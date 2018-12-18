function validarUsuario() {


    if ($("#loginForm").valid()) {

        var usuario = $('#Usuario').val();
        var senha = $('#Senha').val();
        $.ajax({
            type: "GET",
            url: "/Usuario/ValidadeSenha",

            data: { usuario: usuario, senha: senha },
            contentType: 'application/json; charset=utf-8',
            async: true,
            success: function (data) {
                if (data == true) {
                    window.location.href = "Home/"
                } else {
                    alert('Usuário e senha inválido!');
                }
            }
        });
    }
}