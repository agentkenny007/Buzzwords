function TweetService($http, $base64, SERVER) {

	this.appToken = function(term) {
   
		return $http.post('http://localhost:3333/search',{q: term})


	}

}

TweetService.$inject = ['$http', '$base64', 'SERVER'];
export {TweetService};