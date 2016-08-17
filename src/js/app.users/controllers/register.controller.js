export default function Register ($http, SERVER, $state, UserService){
    let vm = this;
    vm.register = register;

    function register (user){
        UserService.register(user).then(resp => {
            $state.go('root.login');
        });
    }
}

Register.$inject = ['$http', 'SERVER', '$state', 'UserService'];
