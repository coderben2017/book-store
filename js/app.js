var routerApp = angular.module('routerApp', [
  'ui.router', 'ngGrid', 'Ctrls', 'Directives', 'Filters', 'Services'
]);

routerApp.run(function($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
});

routerApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('index', {
      url: '/index',
      views: {
        '': {
          templateUrl: '../tpls/home.html'
        },
        'main@index': {
          templateUrl: '../tpls/login.html'
        }
      }
    })
    .state('booklist', {
      url: '/{bookType: [0-9]{1, 4}}',
      views: {
        '': {
          templateUrl: '../tpls/booklist.html'
        },
        'type@booklist': {
          templateUrl: '../tpls/booktype.html'
        },
        'grid@booklist': {
          templateUrl: '../tpls/bookgrid.html'
        }
      }
    })
    .state('bookdetail', {
      url: '/bookdetail',
      templateUrl: '../tpls/bookdetail.html'
    })
    .state('addbook', {
      url: '/addbook',
      templateUrl: '../tpls/addbook.html'
    });
    $urlRouterProvider.otherwise('/index');
});