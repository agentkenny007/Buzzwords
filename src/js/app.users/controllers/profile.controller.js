export default function Profile ($http, $state, $cookies, SERVER, UserService){
    let vm = this;
    init();
    function init (){
        let token = $cookies.get('access_token'),
            config = {
                headers: { Authorization: 'Bearer ' + token }
            };
        UserService.profile(config).then(resp => {
            console.log(resp);
        });
    }
}

Profile.$inject = ['$http', '$state', '$cookies', 'SERVER', 'UserService'];
