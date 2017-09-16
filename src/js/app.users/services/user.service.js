export default function User (SERVER, $http, $cookies, $state) {

    this.register       = register
    this.login          = login
    this.logOut         = logOut
    this.isLoggedIn     = isLoggedIn
    this.profile        = profile
    this.settings       = settings

    function register (user) {
        return $http.post(SERVER.URL + 'register', user)
    }

    function login (user) {
        return $http.post(SERVER.URL + 'login', user)
    }

    function logOut () {
        $cookies.remove('access_token')
        console.log('Logged out!')
        if ($state.current.name === 'root.profile') $state.go('root.home')
    }

    function isLoggedIn () {
        return $cookies.get('access_token') ? true : false
    }

    function profile (config){
        return $http.get(SERVER.URL + 'profile', config)
    }

    function settings (config){
        return $http.post(SERVER.URL + 'user', config)
    }

}

User.$inject = ['SERVER', '$http', '$cookies', '$state']
