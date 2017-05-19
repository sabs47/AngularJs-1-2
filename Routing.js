var app =  angular.module('facebunker', ['ngMaterial','ngRoute']);


   app.config(function($routeProvider) {
    $routeProvider
    .when("/Rendez-vous", {
        templateUrl : "Rendez-vous.html",
        controller: "rolecontroller"
    })
    .when("/Demandes", {
        templateUrl : "Demandes.html",
        controller: "Demandescontroller as ctrl"
    });
    
    
});
