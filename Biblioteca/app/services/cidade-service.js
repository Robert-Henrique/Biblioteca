app.service("cidadeService", function ($http) {

    this.getCidades = function (estadoId) {
        return $http.get("Cidade/Obter/" + estadoId);
    }
});