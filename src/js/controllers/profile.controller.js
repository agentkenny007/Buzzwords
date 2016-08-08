export default function Profile($http, $state, $cookies, SERVER){
    let vm = this;
    init();
    function init(){
        let token = $cookies.get('access_token'),
            config = {
                headers: { Authorization: 'Bearer ' + token }
            };
        $http.get(SERVER.URL + 'profile', config).then(resp => {
            console.log(resp);
        })
    }
}

Profile.$inject = ['$http', '$state', '$cookies', 'SERVER'];
