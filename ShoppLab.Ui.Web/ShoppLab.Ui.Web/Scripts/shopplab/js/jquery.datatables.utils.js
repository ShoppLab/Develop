var languageDataTable =
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
    }
}


function formatarLanguageDataTable() {
    $('table').DataTable();
}

function inicializarDataTable() {
    $('table').dataTable({
        "language": languageDataTable
    });
}


function setPropertiesInitialDataTableConsulta() {
    var table = $('table').DataTable({
        "language": languageDataTable,
        "columnDefs": [{
            "targets": -1,
            "data": null,
            "defaultContent": "<button class='btn btn-primary'>Visualizar</i></button>"
        }]
    });

    $('table tbody').on('click', 'button', function () {
        var data = table.row($(this).parents('tr')).data();
        window.location.href = "Atualizar/" + data[0];
    });
}

function setPropertiesInitialDataTableCadastro() {
    var table = $('table').DataTable({
        "language": {
            //languageDataTable
              "decimal": ",",
            "thousands": ".",
        },
      
        data: detalhePedido,
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
            { "data": "QuantidadeProduto" },
            { "data": "Unidade" },
            { "data": "DescricaoProduto" },
            { "data": "Marca" },
            { "data": "ValorUnitarioMinimo" },
            { "data": "ValorUnitario" },
            { "data": "ValorTotal" },
            { "data": "ValorPrecoVendaUnitario" }

        ],
        "columnDefs": [{
            "targets": -1,
            "data": null,
            "defaultContent": "<button class='btn btn-primary'>Remover</i></button>"
        }],
        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(), data;

            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                        i : 0;
            };
            // Total over all pages
            total = api
                .column(7)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Total over this page
            pageTotal = api
                .column(7, { page: 'current' })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Update footer
            //$(api.column(4).footer()).html(
            //    'R$' + pageTotal + ' ( R$' + total + ' total)'
            //);
        }
       
    });

    $('table tbody').on('click', 'button', function () {
        var data = table.row($(this).parents('tr')).data();
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
}