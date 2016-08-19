import $ from 'jquery';
export default function run ($rootScope, UserService, $state) {
    $rootScope.$on('$stateChangeSuccess', (event, toState) => {
        $('.container').removeClass('home');
        $rootScope.$broadcast('loginChange', UserService.isLoggedIn());
    });
}

run.$inject = ['$rootScope', 'UserService', '$state'];
