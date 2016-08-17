export default function Login ($http, $state, $cookies, SERVER, UserService){
    let vm = this;
    vm.login = login;
    function login (user){
        UserService.login(user).then(resp => {
            console.log(resp);
            $cookies.put('access_token', resp.data.access_token);
            $state.go('root.profile');
        }, err => {
            alert(err.data.error);
        });
    }
}

Login.$inject = ['$http', '$state', '$cookies', 'SERVER', 'UserService'];
