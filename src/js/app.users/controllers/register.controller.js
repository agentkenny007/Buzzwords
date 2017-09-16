export default function Register ($http, SERVER, $state, UserService){
    let vm = this;
    vm.login = login
    vm.register = register;

    function login (){
        $state.go('root.login');
    }

    function register (user){
        UserService.register(user).then(login);
    }
}

Register.$inject = ['$http', 'SERVER', '$state', 'UserService'];
