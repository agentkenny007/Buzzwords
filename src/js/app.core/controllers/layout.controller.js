import $ from 'jquery';
export default function Layout (UserService, $rootScope, $state) {
    let vm = this;
    vm.logOut = logOut;
    vm.loggedIn = false;
    vm.submitSearch = search;


    
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

    function search (term){

        $state.go('root.create',{term: term});
    }

    $(document).on('click', 'header nav .new', function(){ $(this).toggleClass('active'); });
}

Layout.$inject = ['UserService', '$rootScope', '$state'];
