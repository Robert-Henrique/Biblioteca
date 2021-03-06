﻿app.controller("detalhesController", function ($scope, livroService, $routeParams) {

    var id = $routeParams.id;

    if (!$.isEmptyObject(id)) {
        livroService.getLivro(id).success(function (data) {
            $scope.livro = data;
        });
    }

    $scope.salvar = function (livro) {

        livroService.salvar(livro).success(function (data) {
            bootbox.alert("Livro salvo com sucesso.", function () {
                $scope.voltar();
            }); 
        }).error(function (erro) {
            console.log(erro);
        });
    };

    $scope.voltar = function () {
        var url = window.location.protocol + '//' + window.location.host + "#/livros";
        window.location = url;
    };
});