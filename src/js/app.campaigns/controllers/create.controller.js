import $ from 'jquery';

export default function Create ($http, $state, SERVER, $scope, $compile, $stateParams, TweetService, SortAnalysis, ChartService, PostAnalysis){
    let vm = this;
    vm.searchTerm  = $stateParams.term; 
    console.log(vm.searchTerm);
    vm.analysisArray;
    vm.labels;
    vm.postData;
    vm.wordData;
    vm.neqativeWordfreqLabel;
    vm.neqativeWordfreq;
    vm.positiveWordfreqLabel;
    vm.positiveWordfreq;
    vm.freqRadarlabels;
    vm.freqRadardata;

        vm.chartInjector = chartAppend;
    function chartAppend (){

    	vm.arrayOfgraphs.forEach((graph)=>{
    		  let canvas_html = graph;
    		  var element = angular.element(canvas_html);
			  $compile(element)($scope);
			  $('#char').append(element);

    	});
    	
    };

    vm.getAnalysis = TweetService.appToken(vm.searchTerm).then((res)=>{
    	    
			 vm.analysisArray = res.data;
			 vm.analysisArray.term = vm.searchTerm;
			 console.log(vm.analysisArray);
			 vm.graphAnalysis = SortAnalysis.sortObj(vm.analysisArray.tweets, vm.analysisArray.tumblrPosts);

			 // vm.graphAnalysistumb = SortAnalysis.sortObj(vm.analysisArray.tumblrPosts)
			 // vm.graphAnalysis = SortAnalysis.gapFill(vm.graphAnalysis);
			 // console.log(vm.graphAnalysis)
			ChartService.chartGenerator(vm.graphAnalysis, vm);
	
			// console.log(vm.neqativeWordfreqLabel, vm.neqativeWordfreq, vm.positiveWordfreqLabel, vm.positiveWordfreq);
			// console.log(vm.freqRadarlabels, vm.freqRadardata);

			
			vm.chartInjector()

				TweetService.campGet(vm.analysisArray).then((res)=>{
		console.log('hi shshshshshsh')
		console.log(res.data);
	})   
		});

    vm.submitAnalysis = submitAnalysis;

    function submitAnalysis () {
    	if (vm.analysisArray !== false){

    	}

    }
    
 
 





  //     vm.options = {tooltips: { enabled: false }}

  	vm.options = {
        legend: {
            display: true,
 
        }
    }



}

Create.$inject = ['$http', '$state', 'SERVER','$scope', '$compile', '$stateParams','TweetService', 'SortAnalysis', 'ChartService', 'PostAnalysis'];
