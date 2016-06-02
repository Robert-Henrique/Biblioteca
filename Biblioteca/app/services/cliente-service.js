app.service("clienteService", function ($http) {

    this.getClientes = function (range, filtro) {
        return $http.get("Cliente/Listar/" + range + "/" + filtro);
    }

    this.getCliente = function (Id) {
        return $http.get("/Cliente/Obter/" + Id);
    }

    this.salvar = function (cliente) {
        var response = $http({
            method: "post",
            url: "Cliente/Salvar",
            data: JSON.stringify(cliente),
            dataType: "json"
        });
        return response;
    };

    this.editar = function (cliente) {
        var response = $http({
            method: "post",
            url: "Cliente/Editar",
            data: JSON.stringify(cliente),
            dataType: "json"
        });
        return response;
    };

    this.excluir = function (cliente) {
        var response = $http({
            method: "post",
            url: "Cliente/Excluir",
            data: JSON.stringify(cliente),
            dataType: "json"
        });
        return response;
    };
});