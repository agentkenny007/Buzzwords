import $ from 'jquery';
export default function Layout ($rootScope, $state, UserService) {
    let vm = this;
    vm.logOut = logOut;
    vm.loggedIn = false;
    vm.userSettings = edit;
    vm.submitSearch = search;

    (function init () {
        vm.loggedIn = UserService.isLoggedIn();
    })();

    function edit () {
        $('.overlay').animate({ 'top' : 0}, 750, function(){
            $state.go('settings');
        });
    }

    function logOut () {
        UserService.logOut();
        vm.loggedIn = false;
    }

    function search (term){
        $state.go('root.create', { term: term });
    }

    $(document)
        .on('click', 'header nav .new', function(){ $(this).toggleClass('active'); })
        .on('click', '.hamburger', function(){
            $(this).toggleClass('is-active');
            $('nav.mobile').toggleClass('active');
        });

    $rootScope.$on('loginChange', (event, status) => {
        vm.loggedIn = status;
    });
}

Layout.$inject = ['$rootScope', '$state', 'UserService'];
