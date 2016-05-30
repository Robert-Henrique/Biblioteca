var app = angular.module("app", ['ngRoute'])
    .config(function ($routeProvider,$locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'Dashboard.html',
            controller: 'listaController'
        })
        .when('/livros', {
            templateUrl: 'Script/Livros/Livro/Index.html',
            controller: 'detalhesController'
        })
        .when('/livros/detalhes', {
            templateUrl: 'Script/Livros/Livro/Detalhes.html',
            controller: 'detalhesController'
        })
        .when('/livros/detalhes/:id', {
            templateUrl: 'Script/Livros/Livro/Detalhes.html',
            controller: 'detalhesController'
        }).otherwise({
            redirectTo: '/'
        });
       // $locationProvider.html5Mode(true);
    });