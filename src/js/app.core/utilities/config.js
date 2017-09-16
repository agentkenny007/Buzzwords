export default function config ($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('root', {
            abstract: true,
            templateUrl: 'templates/layout.template.htm',
            controller: 'LayoutController as vm'
        })
        .state('root.create', {
            url: '/createcampaign/:term',
            templateUrl: 'templates/create.template.htm',
            controller: 'CreateController as vm'
        })
        .state('root.home', {
            url: '/',
            templateUrl: 'templates/home.template.htm',
            controller: 'HomeController as vm'
        })
        .state('root.login', {
            url: '/login',
            templateUrl: 'templates/login.template.htm',
            controller: 'LoginController as vm'
        })
        .state('root.profile', {
            url: '/profile',
            templateUrl: 'templates/profile.template.htm',
            controller: 'ProfileController as vm'
        })
        .state('settings', {
            url: '/profile/settings',
            templateUrl: 'templates/profile.settings.template.htm',
            controller: 'ProfileSettingsController as vm'
        })
        .state('root.register', {
            url: '/register',
            templateUrl: 'templates/register.template.htm',
            controller: 'RegisterController as vm'
        })
        .state('root.campaign', {
            url: '/campaign/:camp_id',
            templateUrl: 'templates/campaigns.template.htm',
            controller: 'CampaignsController as vm'
        })

    $urlRouterProvider.otherwise('/');
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
