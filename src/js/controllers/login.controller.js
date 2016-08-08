export default function Login($http, $state, $cookies, SERVER){
    let vm = this;
    vm.login = login;
    function login(user){
        $http.post(SERVER.URL + 'login', user).then(resp => {
            $cookies.put('access_token', resp.data.access_token);
            $state.go('profile');
        });
    }
}

Login.$inject = ['$http', '$state', '$cookies', 'SERVER'];
