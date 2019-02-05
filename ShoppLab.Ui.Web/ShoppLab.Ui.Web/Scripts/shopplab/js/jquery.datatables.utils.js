var settings =
{
    "sEmptyTable": "Nenhum registro encontrado",
    "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
    "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
    "sInfoFiltered": "(Filtrados de _MAX_ registros)",
    "sInfoPostFix": "",
    "sInfoThousands": ".",
    "sLengthMenu": "_MENU_ resultados por página",
    "sLoadingRecords": "Carregando...",
    "sProcessing": "Processando...",
    "sZeroRecords": "Nenhum registro encontrado",
    "sSearch": "Pesquisar",
    "oPaginate": {
        "sNext": "Próximo",
        "sPrevious": "Anterior",
        "sFirst": "Primeiro",
        "sLast": "Último"
    },
    "oAria": {
        "sSortAscending": ": Ordenar colunas de forma ascendente",
        "sSortDescending": ": Ordenar colunas de forma descendente"
    },
    "decimal": ",",
    "thousands": "."
}


function setPropertiesInitialDataTableCadastrar() {
    var table = $('table').DataTable({
        "language": settings,
        paging: true,
        searching: true,
        columns: [
            {
                "className": 'details-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            { "data": "QuantidadeProduto" },
            { "data": "Unidade" },
            { "data": "DescricaoProduto" },
            { "data": "Marca" },
            { "data": "ValorUnitarioMinimo" },
            { "data": "ValorUnitario" },
            { "data": "ValorPrecoVendaUnitario" },
            { "data": "ValorTotal" },
            { "data": "Delete" }
        ],
        "columnDefs": [{
            "targets": -1,
            "data": null,
            "defaultContent": "<button class='btn btn-primary' onclick='modalYesNo()'>Remover</i></button>"
        }],
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],

        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(), data;

            // Remove the formatting to get integer data for summation
            var intVal = function (nStr) {
                nStr += '';
                x = nStr.split('.');
                x1 = x[0];
                x2 = x.length > 1 ? '.' + x[1] : '';
                var rgx = /(\d+)(\d{3})/;
                while (rgx.test(x1)) {
                    x1 = x1.replace(rgx, '$1' + ',' + '$2');
                }
                return x1 + x2;
            };
            // Total over all pages
            total = api
                .column(8)
                .data()
                .reduce(function (a, b) {

                    var valorA = 0;
                    var valorB = 0;

                    if (a.toString().indexOf(",") != -1) {
                        valorA = formatarMoedaUS(intVal(a));
                    } else {
                        valorA = a;
                    }

                    if (b.toString().indexOf(",") != -1) {
                        valorB = formatarMoedaUS(intVal(b));
                    } else {
                        valorB = b;

                    }

                    return valorA + valorB;

                }, 0);


            //Update footer
            $(api.column(5).footer()).html(
                'R$ ' + formatarMoeda(total) + ' total'
            );
        }

    });

    //Add event listener for opening and closing details
    $('table tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });

    $('table tbody').on('click', 'button', function () {
        rowDataTable = table.row($(this).parents('tr'));
        idItemPedido = rowDataTable.data().Id;
        indexRow = table.row(this).index();
    });
}

function setPropertiesInitialDataTableConsulta() {
    var table = $('table').DataTable({
        "language": settings

        ,
        "columnDefs": [{
            "targets": -1,
            "data": null,
            "defaultContent": "<button class='btn btn-primary'>Visualizar</i></button>"
        }],
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
    });

    $('table tbody').on('click', 'button', function () {
        var data = table.row($(this).parents('tr')).data();
        window.location.href = urlAtualizar + "/" + data[0];
    });
}

function setPropertiesInitialDataTableAtualizar() {
    var table = $('table').DataTable({
        "language": settings,
        data: detalhePedidoApresentacao,
        paging: true,
        searching: true,
        info: false,
        columns: [
            {
                "className": 'details-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            { "data": "Id" },
            { "data": "QuantidadeProduto" },
            { "data": "Unidade" },
            { "data": "DescricaoProduto" },
            { "data": "Marca" },
            { "data": "ValorUnitarioMinimo" },
            { "data": "ValorUnitario" },
            { "data": "ValorPrecoVendaUnitario" },
            { "data": "ValorTotal" },
            { "data": "Remover" },


        ],
        "columnDefs": [{
            "targets": -1,
            "data": null,
            "defaultContent": "<button class='btn btn-primary' onclick='modalYesNo()'>Remover</i></button>"
        },
        {
            "targets": [1],
            "visible": false
        }],
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],

        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(), data;

            // Remove the formatting to get integer data for summation
            var intVal = function (nStr) {
                nStr += '';
                x = nStr.split('.');
                x1 = x[0];
                x2 = x.length > 1 ? '.' + x[1] : '';
                var rgx = /(\d+)(\d{3})/;
                while (rgx.test(x1)) {
                    x1 = x1.replace(rgx, '$1' + ',' + '$2');
                }
                return x1 + x2;
            };

            // Total over all pages
            total = api
                .column(9)
                .data()
                .reduce(function (a, b) {

                    var valorA = 0;
                    var valorB = 0;

                    if (a.toString().indexOf(",") != -1) {
                        valorA = formatarMoedaUS(intVal(a));
                    } else {
                        valorA = a;
                    }

                    if (b.toString().indexOf(",") != -1) {
                        valorB = formatarMoedaUS(intVal(b));
                    } else {
                        valorB = b;
                    }

                    return valorA + valorB;

                }, 0);

            // Update footer
            $(api.column(5).footer()).html(
                'R$ ' + formatarMoeda(total) + ' total'
            );
        }

    });

    // Add event listener for opening and closing details
    $('table tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });

    $('table tbody').on('click', 'button', function () {
        rowDataTable = table.row($(this).parents('tr'));
        idItemPedido = rowDataTable.data().Id;
    });
}
