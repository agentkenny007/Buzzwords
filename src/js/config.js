export default function config($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.template.htm',
            controller: 'LoginController as vm'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: 'templates/profile.template.htm',
            controller: 'ProfileController as vm'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'templates/register.template.htm',
            controller: 'RegisterController as vm'
        });

    $urlRouterProvider.otherwise('/login');
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
