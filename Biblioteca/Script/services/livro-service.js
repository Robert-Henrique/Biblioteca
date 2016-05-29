app.service("livroService", function ($http) {

    this.getLivros = function () {
        return $http.get("Livro/Obter");
    }

    this.getLivro = function (Id) {
        return $http.get("/Livro/Obter/" + Id);
    }

    this.salvar = function (livro) {
        var response = $http({
            method: "post",
            url: "Livro/Salvar",
            data: JSON.stringify(livro),
            dataType: "json"
        });
        return response;
    };

    this.editar = function (livro) {
        var response = $http({
            method: "post",
            url: "Livro/Editar",
            data: JSON.stringify(livro),
            dataType: "json"
        });
        return response;
    };

    this.excluir = function (livro) {
        var response = $http({
            method: "post",
            url: "Livro/Excluir",
            data: JSON.stringify(livro),
            dataType: "json"
        });
        return response;
    };
});