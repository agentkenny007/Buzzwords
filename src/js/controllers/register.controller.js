export default function Register($http, SERVER, $state){
    let vm = this;
    vm.register = register;

    function register(user) {
        $http.post(SERVER.URL + 'register', user).then(resp => {
          $state.go('login');
        });
    }
}

Register.$inject = ['$http', 'SERVER', '$state'];
