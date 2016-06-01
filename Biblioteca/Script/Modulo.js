//angular.module("app", ['ui.bootstrap']);

var app = angular.module("app", ['ngRoute', 'ui.bootstrap'])
    .config(function ($routeProvider,$locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'Dashboard.html',
            controller: 'listaController'
        })
        .when('/livros', {
            templateUrl: 'Script/Templates/Livro/Index.html',
            controller: 'detalhesController'
        })
        .when('/livros/detalhes', {
            templateUrl: 'Script/Templates/Livro/Detalhes.html',
            controller: 'detalhesController'
        })
        .when('/livros/detalhes/:id', {
            templateUrl: 'Script/Templates/Livro/Detalhes.html',
            controller: 'detalhesController'
        }).otherwise({
            redirectTo: '/'
        });
       // $locationProvider.html5Mode(true);
    });