var app = angular.module("app", ['ngRoute'])
    .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'Script/Templates/Livro/Index.html',
            controller: 'listaController'
        })
        .when('/detalhes', {
            templateUrl: 'Script/Templates/Livro/Detalhes.html',
            controller: 'detalhesController'
        })
        .when('/detalhes/:id', {
            templateUrl: 'Script/Templates/Livro/Detalhes.html',
            controller: 'detalhesController'
        })
        .when('/animais/:id', {
            templateUrl: 'detalhe.html',
            controller: 'AnimalDetalheController'
        }).otherwise({
            redirectTo: '/'
        });
    });