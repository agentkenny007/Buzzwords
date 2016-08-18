import $ from 'jquery';
export default function Layout (UserService, $rootScope) {
    let vm = this;
    vm.logOut = logOut;
    vm.loggedIn = false;


    
    init();
 
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

    $(document).on('click', 'header nav .new', function(){ $(this).toggleClass('active'); });
}

Layout.$inject = ['UserService', '$rootScope'];
