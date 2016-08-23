function PostAnalysis ($http){
	this.postNewcamp = postAnalysis;
	this.postTo      = postTo;


	function postAnalysis (obj, camp) {
		return $http.post('http://localhost:3333/campaigns',{grape: obj, camp: camp});

	}

	function postTo (obj, camp) {
		return $http.post('http://localhost:3333/campaigns',{grape: obj, camp: camp});

	}

};

PostAnalysis.$inject = ['$http'];

export {PostAnalysis};
