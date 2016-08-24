function PostAnalysis ($http, SERVER, $cookies){
	this.postNewcamp     = postAnalysis;
	this.postTocampaign  = postTocampaign;
	this.createCampaigns = createCampaigns;
	this.getGrapes		 = getGrapes;
	this.getCampaigns	 = getCampaigns;


	function postAnalysis (grapeObj, camp_id) {
		return $http.post(SERVER.URL + 'http://localhost:3333/campaigns',{grape: obj, campaigns_id: camp});

	}

	function createCampaigns(obj){
		return $http.post(SERVER.URL + 'campaigns',{title: obj.title, description: obj.desc});

	}

	function getCampaigns(){



		let token = $cookies.get('access_token')
		console.log(token);
   
		return $http({
			method: 'GET',
			url: SERVER.URL + 'campaigns',
			headers:{
			
				'Authorization': "Bearer " + token 
			}
			})




	}

	function postTocampaign (obj, camp_id) {
		return $http.post(SERVER.URL + 'grape',{grapeObj: obj, campaigns_id: camp_id});

	}

		function getGrapes (obj) {
		return $http.post(SERVER.URL + 'grape/get',{campaigns_id: obj.camp_id});

	}
};

PostAnalysis.$inject = ['$http', 'SERVER', '$cookies'];

export {PostAnalysis};
