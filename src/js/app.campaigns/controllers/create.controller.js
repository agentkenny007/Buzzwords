export default function Create ($http, $state, SERVER, $stateParams, TweetService){
    let vm = this;
    vm.searchTerm  = $stateParams.term; 
    vm.analysisArray;
    vm.getAnalysis = TweetService.appToken(vm.searchTerm).then((res)=>{
    	    
			 vm.analysisArray = res.data
			 console.log(vm.analysisArray);
		
		});




  vm.labels = ["January", "February", "March", "April", "May", "June", "July"];
  vm.series = ['Series A', 'Series B'];
  vm.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  vm.onClick = function (points, evt) {
    console.log(points, evt);
  };
  vm.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  vm.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };



}

Create.$inject = ['$http', '$state', 'SERVER', '$stateParams','TweetService'];
