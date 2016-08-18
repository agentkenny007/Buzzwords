export default function Create ($http, $state, SERVER, $stateParams, TweetService){
    let vm = this;
    vm.searchTerm = $stateParams.term; 
    TweetService.appToken(vm.searchTerm);
    
}

Create.$inject = ['$http', '$state', 'SERVER', '$stateParams','TweetService'];
