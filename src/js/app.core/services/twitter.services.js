function TweetService($http, $base64, SERVER, $cookies) {

	this.appToken = function(term) {
   
		return $http.post(SERVER.URL + 'search',{q: term})


	};
	this.campGet = function(term) {

		let token = $cookies.get('access_token')
		console.log(token);
   
		return $http({
			method: 'POST',
			url: SERVER.URL + 'grape/get ',
			headers:{
			
				'Authorization': "Bearer " + token 
			},data:{
				// "grapeObj": term,
				"campaigns_id": 1
			}
			})


	};

}

TweetService.$inject = ['$http', '$base64', 'SERVER', '$cookies'];
export {TweetService};