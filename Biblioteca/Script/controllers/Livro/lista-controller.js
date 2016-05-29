
app.controller("listaController", function ($scope, livroService) {

    $scope.livros = [];

    $scope.obterLivros = function () {
        livroService.getLivros().success(function (data) {
            $scope.livros = data;
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
});