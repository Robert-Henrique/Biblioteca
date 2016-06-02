angular.module("app").controller("listaClienteController", function ($scope, clienteService) {

    $scope.currentPage = 1;
    $scope.maxSize = 10;
    $scope.filtro = "";
    $scope.clientes = [];

    $scope.obterClientes = function () {
        clienteService.getClientes($scope.currentPage, $scope.filtro).success(function (data) {
            $scope.clientes = data.clientes;
            $scope.totalItens = data.totalItens;
            $scope.numPages = data.numPages;
        }).error(function (erro) {
            console.log(erro);
        });
    };

    $scope.excluir = function (cliente) {
        bootbox.confirm("Tem certeza que deseja excluir?", function (result) {
            if (result) {
                clienteService.excluir(cliente).success(function (result) {
                    $scope.obterClientes();
                }).error(function (erro) {
                    console.log(erro);
                });
            }
        });
    };

    $scope.paginaAlterada = function () {
        $scope.obterClientes();
    };

    $scope.pesquisaAlterada = function () {
        $scope.obterClientes();
    };
});