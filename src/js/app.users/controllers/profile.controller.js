export default function Profile ($http, $state, $cookies, SERVER, UserService, PostAnalysis){
    let vm = this;
    init();
    vm.user = {};
    vm.campaigns;
    function init (){
        let token = $cookies.get('access_token'),
            config = {
                headers: { Authorization: 'Bearer ' + token }
            };
        UserService.profile(config).then(resp => {
            console.log(resp);
            vm.user.email = resp.data.email;
        });

        PostAnalysis.getCampaigns().then((res)=>{
            vm.campaigns = res.data;
            console.log(res.data);
        });
    }
}

Profile.$inject = ['$http', '$state', '$cookies', 'SERVER', 'UserService', 'PostAnalysis'];
