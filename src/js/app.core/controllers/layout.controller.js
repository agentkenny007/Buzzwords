import $ from 'jquery';
export default function Layout ($rootScope, $state, UserService) {
    let vm = this;
    vm.logOut = logOut;
    vm.loggedIn = false;
    vm.userSettings = edit;

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

    function edit () {
        $('.overlay').animate({ 'top' : 0}, 750, function(){
            $state.go('settings');
        });
    }

    $(document)
        .on('click', 'header nav .new', function(){ $(this).toggleClass('active'); })
        .on('click', '.hamburger', function(){
            $(this).toggleClass('is-active');
            $('nav.mobile').toggleClass('active');
        });
}

Layout.$inject = ['$rootScope', '$state', 'UserService'];
