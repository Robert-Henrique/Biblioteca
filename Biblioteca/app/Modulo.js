var app = angular.module("app", ['ngRoute', 'ui.bootstrap']);

app.config(function ($routeProvider, $locationProvider) {

    // remove o # da url
    //$locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl: 'app/Templates/Home/Index.html'
        })
        .when('/livros', {
            templateUrl: 'app/Templates/Livro/Index.html',
            controller: 'detalhesController'
        })
        .when('/livros/detalhes', {
            templateUrl: 'app/Templates/Livro/Detalhes.html',
            controller: 'detalhesController'
        })
        .when('/livros/detalhes/:id', {
            templateUrl: 'app/Templates/Livro/Detalhes.html',
            controller: 'detalhesController'
        })
        .when('/cliente', {
            templateUrl: 'app/Templates/Cliente/Index.html'
        })
        .when('/cliente/detalhes', {
            templateUrl: 'app/Templates/Cliente/Detalhes.html'
        })
        .when('/cliente/detalhes/:id', {
            templateUrl: 'app/Templates/Cliente/Detalhes.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});