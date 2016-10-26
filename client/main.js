var App = angular.module('StoreModule', ['ngRoute']);

var USER = prompt('Please login!');

App.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/partials/_index.html',
    controller: 'IndexController'
  })
  .when('/products', {
    templateUrl: '/partials/_products.html',
    controller: 'ProductController'
  })
  .when('/products/:id', {
    templateUrl: '/partials/_show.html',
    controller: 'ShowController'
  })
  .when('/customers', {
    templateUrl: '/partials/_customers.html',
    controller: 'CustomerController'
  })
  .when('/orders', {
    templateUrl: '/partials/_orders.html',
    controller: 'OrderController'
  })
  .otherwise({
    redirectTo: '/'
  })
})
