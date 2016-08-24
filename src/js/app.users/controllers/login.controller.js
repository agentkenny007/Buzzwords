export default function Login ($http, $state, $cookies, SERVER, UserService){
    let vm = this;
    vm.login = login;
    function login (user){
        if (typeof user === 'string')
            switch (user) {
                // case 'fbUser' : FB.login()
                case 'fbUser' : FB.getLoginStatus(resp => facebookLogin(resp))
            }
        else UserService.login(user).then(resp => {
            console.log(resp);
            $cookies.put('access_token', resp.data.access_token);
            $state.go('root.profile');
        }, err => {
            alert(err.data.error);
        });
    }
    function facebookLogin (response){
        console.log(response);
        $cookies.put('access_token', response.authResponse.accessToken);
        $state.go('root.profile');
        if (response.status === 'connected'){
            // Logged into your app and Facebook.
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', function(response) {
              console.log('Successful login for: ' + response.name);
              document.getElementById('status').innerHTML =
                'Thanks for logging in, ' + response.name + '!';
            });
        } else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not your app.
            document.getElementById('status').innerHTML = 'Please log ' +
              'into this app.';
        } else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
            document.getElementById('status').innerHTML = 'Please log ' +
              'into Facebook.';
        }
    }
}

Login.$inject = ['$http', '$state', '$cookies', 'SERVER', 'UserService'];
