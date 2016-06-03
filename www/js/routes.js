
angular.module('app.routes', [])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  /*
   * abstract app
   */
  .state('app', {
    abstract: true,
    templateUrl: "templates/menu.html",
  })

  /*
   * repot jpj
   */
  .state('app.jpj', {
    url:"/jpj",
    views: {
      'menuContent': {
        templateUrl: "templates/jpj.html",
      }
    }
  })

  $urlRouterProvider.otherwise('/jpj');
});