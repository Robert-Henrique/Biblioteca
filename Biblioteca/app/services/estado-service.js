app.service("estadoService", function ($http) {

    this.getEstados = function () {
        return $http.get("Estado/Obter");
    }
});