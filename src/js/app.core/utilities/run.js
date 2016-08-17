export default function run ($rootScope, UserService, $state) {
    $rootScope.$on('$stateChangeSuccess', (event, toState) => {
        $rootScope.$broadcast('loginChange', UserService.isLoggedIn());
    });
}

run.$inject = ['$rootScope', 'UserService', '$state'];
