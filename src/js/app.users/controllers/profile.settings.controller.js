import $ from 'jquery';
export default function Settings ($cookies, $http, $state, $window, SERVER, UserService){
    let vm = this,
        token = $cookies.get('access_token'),
        config = {
            headers: { Authorization: 'Bearer ' + token }
        };
    vm.update = update;
    vm.goBack = browserBack;

    (function init (){
        $('.frame').fadeIn('slow');
        UserService.profile(config).then(resp => {
            console.log(resp);
            vm.user = resp.data;
        });
    })();

    function update (){
        let settings = config
        settings.params = {
            firstname: vm.user.firstname,
            lastname: vm.user.lastname,
            email: vm.user.email,
            password: vm.user.password,
            profile_pic: vm.user.profile_pic,
            public: vm.user.public
        };
        UserService.settings(settings).then(resp => {
            console.log(resp);
            browserBack();
        }, err => browserBack());
    }

    function browserBack (){
        $('.frame').fadeOut('slow');
        $('.flash').fadeIn(1200, function(){ $window.history.back() });
    }
}

Settings.$inject = ['$cookies', '$http', '$state', '$window', 'SERVER', 'UserService'];
