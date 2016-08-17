export default function Layout (UserService, $rootScope, TweetService) {
    let vm = this;
    vm.logOut = logOut;
    vm.loggedIn = false;


    
    init();
    TweetService.appToken();
    $rootScope.$on('loginChange', (event, status) => {
        vm.loggedIn = status;
    });

    function init () {
        vm.loggedIn = UserService.isLoggedIn();
    }

    function logOut () {
        UserService.logOut();
        vm.loggedIn = false;
    }
}

Layout.$inject = ['UserService', '$rootScope', 'TweetService'];
