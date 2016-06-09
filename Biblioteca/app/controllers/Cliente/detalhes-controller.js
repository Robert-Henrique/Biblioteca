app.controller("detalhesClienteController", function ($scope, clienteService, estadoService, cidadeService, $routeParams) {

    estadoService.getEstados().success(function (data) {
        $scope.estados = data;
    }).error(function (erro) {
        console.log(erro);
    });

    var id = $routeParams.id;

    if (!$.isEmptyObject(id)) {
        clienteService.getCliente(id).success(function (data) {
            $scope.cliente = data;
        });
    }

    $scope.salvar = function (cliente) {

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

    $scope.$watch('cliente.EstadoId', function (estadoId) {
        if (angular.isDefined(estadoId)) {
            cidadeService.getCidades(estadoId).success(function (data) {
                $scope.cidades = data;
            }).error(function (erro) {
                console.log(erro);
            });
        }
    });
});