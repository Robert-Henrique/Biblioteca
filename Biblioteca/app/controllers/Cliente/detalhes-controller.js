app.controller("detalhesClienteController", function ($scope, clienteService, estadoService, cidadeService, $routeParams) {

    $scope.estados = [];
    $scope.cidades = [];
    $scope.estadoSelecionado;
    $scope.cidadeSelecionada;

    estadoService.getEstados().success(function (data) {
        $scope.estados = data;
        $scope.estadoSelecionado = data[0];
    }).error(function (erro) {
        console.log(erro);
    });

    var id = $routeParams.id;

    if (!$.isEmptyObject(id)) {
        clienteService.getCliente(id).success(function (data) {
            $scope.cliente = data;
            $scope.estadoSelecionado = data.Cidade.Estado;
            $scope.cidadeSelecionada = data.Cidade;
        });
    }

    $scope.salvar = function (cliente) {
        cliente.CidadeId = $scope.cidadeSelecionada.Id;

        clienteService.salvar(cliente).success(function (data) {
            bootbox.alert("Cliente salvo com sucesso.", function () {
                $scope.voltar();
            });
        }).error(function (erro) {
            console.log(erro);
        });
    };

    $scope.voltar = function () {
        var url = window.location.protocol + '//' + window.location.host + "#/cliente";
        window.location = url;
    };

    $scope.$watch('estadoSelecionado', function (estado) {
        if (angular.isDefined(estado)) {
            cidadeService.getCidades(estado.Id).success(function (data) {
                $scope.cidades = data;

                //Seleciona a primeira cidade do Array de cidades apenas no cadastro
                if ($.isEmptyObject(id)) {
                    $scope.cidadeSelecionada = data[0];
                }
            }).error(function (erro) {
                console.log(erro);
            });
        }
    });
});