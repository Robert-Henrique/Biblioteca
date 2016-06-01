angular.module("app").controller("listaController", function ($scope, livroService) {

    $scope.currentPage = 1;
    $scope.maxSize = 10;

    $scope.livros = [];

    $scope.obterLivros = function () {
        livroService.getLivros($scope.currentPage).success(function (data) {
            $scope.livros = data.livros;
            $scope.totalItens = data.totalItens;
        }).error(function (erro) {
            console.log(erro);
        });
    };

    $scope.excluir = function (livro) {
        bootbox.confirm("Tem certeza que deseja excluir?", function (result) {
            if (result) {
                livroService.excluir(livro).success(function (result) {
                    $scope.obterLivros();
                }).error(function (erro) {
                    console.log(erro);
                });
            }
        });
    };

    $scope.paginaAlterada = function () {
        $scope.obterLivros($scope.currentPage);
    };
});