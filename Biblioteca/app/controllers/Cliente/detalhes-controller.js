app.controller("detalhesClienteController", function ($scope, clienteService, estadoService, cidadeService, $routeParams) {

    $scope.estados = [];
    $scope.cidades = [];
    $scope.estadoSelecionado;
    $scope.cidadeSelecionada;

    var id = $routeParams.id;

    if (!$.isEmptyObject(id)) {
        clienteService.getCliente(id).success(function (data) {
            $scope.cliente = data;
        });
    }

    $scope.salvar = function (cliente) {
        cliente.Cidade = $scope.cidadeSelecionada;
        cliente.CidadeId = $scope.cidadeSelecionada.Id;
        
        clienteService.salvar(cliente).success(function (data) {
            bootbox.alert("Cliente salvo com sucesso.", function () {
                $scope.voltar();
            });
        }).error(function (erro) {
            console.log(erro);
        });
    };

    estadoService.getEstados().success(function (data) {
        $scope.estados = data;
        $scope.estadoSelecionado = data[0];
    }).error(function (erro) {
        console.log(erro);
    });

    $scope.voltar = function () {
        var url = window.location.protocol + '//' + window.location.host + "#/cliente";
        window.location = url;
    };

    $scope.$watch('estadoSelecionado', function (estado) {
        if (angular.isDefined(estado)) {
            cidadeService.getCidades(estado.Id).success(function (data) {
                $scope.cidades = data;
                $scope.cidadeSelecionada = data[0];
            }).error(function (erro) {
                console.log(erro);
            });
        }
    });
});