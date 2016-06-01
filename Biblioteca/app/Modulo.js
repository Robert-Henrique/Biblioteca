var app = angular.module("app", ['ngRoute', 'ui.bootstrap']);

app.config(function ($routeProvider, $locationProvider) {

    // remove o # da url
    //$locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl: 'app/Templates/Livro/Index.html'
            //controller: 'detalhesController'
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
        }).otherwise({
            redirectTo: '/'
        });
});