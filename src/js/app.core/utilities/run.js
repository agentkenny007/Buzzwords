import $ from 'jquery'
export default function run ($rootScope, $state, $window, UserService){
    (function(d, s, id){
       let js, fjs = d.getElementsByTagName(s)[0]
       if (d.getElementById(id)) return
       js = d.createElement(s); js.id = id; js.async = true
       js.src = "//connect.facebook.net/en_US/sdk.js"
       fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'facebook-jssdk'))

    $window.fbAsyncInit = function() {
      FB.init({
        appId: '1672718793054599',
        channelUrl: 'channel.htm',
        cookie: true,
        status: true,
        xfbml: true,
        version: 'v2.7'
      })
    }

    $rootScope.$on('$stateChangeSuccess', (event, toState) => {
        $('.container').removeClass('home')
        $('nav.mobile').removeClass('active')
        $rootScope.$broadcast('loginChange', UserService.isLoggedIn())
    })
}

run.$inject = ['$rootScope', '$state', '$window', 'UserService']
