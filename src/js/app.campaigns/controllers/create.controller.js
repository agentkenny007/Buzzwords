export default function Create ($http, $state, SERVER, $stateParams, TweetService, SortAnalysis){
    let vm = this;
    vm.searchTerm  = $stateParams.term; 
    vm.analysisArray;
    vm.getAnalysis = TweetService.appToken(vm.searchTerm).then((res)=>{
    	    
			 vm.analysisArray = res.data
			 console.log(vm.analysisArray);
			 vm.graphAnalysis = SortAnalysis.sortObj(vm.analysisArray);
		
		});
    




  vm.labels = ["little Positive", "Positive", "Very Positive", "little Negative", "Negative", "Very Negative"];
  
  vm.data = [5, 2, 3, 2, 5, 5];
  vm.onClick = function (evt) {
    console.log(evt);
  };


    vm.bubbleseries = ['Series A', 'Series B'];

    vm.bubbledata = [
      [{
        x: 40,
        y: 10,
        r: 20
      }],
      [{
        x: 10,
        y: 40,
        r: 50
      }]
    ];




}

Create.$inject = ['$http', '$state', 'SERVER', '$stateParams','TweetService', 'SortAnalysis'];
