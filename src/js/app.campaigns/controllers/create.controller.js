export default function Create ($http, $state, SERVER, $stateParams, TweetService, SortAnalysis, ChartService){
    let vm = this;
    vm.searchTerm  = $stateParams.term; 
    vm.analysisArray;
    vm.getAnalysis = TweetService.appToken(vm.searchTerm).then((res)=>{
    	    
			 vm.analysisArray = res.data
			 console.log(vm.analysisArray);
			 vm.graphAnalysis = SortAnalysis.sortObj(vm.analysisArray);
			 // vm.graphAnalysis = SortAnalysis.gapFill(vm.graphAnalysis);
			 // console.log(vm.graphAnalysis)
			ChartService.chartGenerator(vm.graphAnalysis, vm);
			console.log(vm.neqativeWordfreqLabel, vm.neqativeWordfreq, vm.positiveWordfreqLabel, vm.positiveWordfreq);
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
        r: 20,
        sentiment: "little Positive",
        User: "@slaymaster",
        Tweet: "You're such an ass hole"
      }],
      [{
        x: 10,
        y: 40,
        r: 50
      }]
    ];

    vm.bubbdata = [{
    	label: 'Positive',
    	data:  [

    	{
            x: 20,
            y: 30,
            r: 15
    	},
    	{
            x: 10,
            y: 25,
            r: 40
    	}]
    	
    },{

    	label: 'Negative',
    	data:  [

    	{
            x: 13,
            y: 20,
            r: 15
    	},
    	{
            x: 40,
            y: 5,
            r: 40
    	}]
    }]
    vm.onHover = function (evt){
    	console.log(evt);
    };

    vm.options = {tooltips: { enabled: false }}



}

Create.$inject = ['$http', '$state', 'SERVER', '$stateParams','TweetService', 'SortAnalysis', 'ChartService'];
