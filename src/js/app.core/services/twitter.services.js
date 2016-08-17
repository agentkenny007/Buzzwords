function TweetService($http, $base64, SERVER) {

	this.appToken = function() {

		let Etoken = $base64.encode('AAAAAAAAAAAAAAAAAAAAAB7LwQAAAAAAarZg1tAJPeJJxnviOsbLlwIPFC8%3DbQNWTIky9xyYEBVJE3q4uhqgEazScfeBcUZA9nW0u94dnOa8Cy');
		console.log( Etoken);
   
		$http.post('http://localhost:3333/search/tweets',{q: 'Fill Werrell'}).then((res)=>{
			console.log(res.data);
		})


	}

}

TweetService.$inject = ['$http', '$base64', 'SERVER'];
export {TweetService};