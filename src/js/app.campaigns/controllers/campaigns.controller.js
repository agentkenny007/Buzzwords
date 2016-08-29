import $ from 'jquery';

export default function Campaigns ($http, $state, SERVER, $scope, $compile, $stateParams, PostAnalysis, SortAnalysis, ChartService){
    let vm = this;
    vm.camp_id = $stateParams.camp_id;
    vm.grapes;

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

  	vm.options = {
        legend: {
            display: true,

        }
    }


    vm.init = function (){

        PostAnalysis.getCampaigns().then((res)=>{
            vm.campaigns = res.data;
            console.log(res.data);
        	vm.campaigns.forEach((camp)=>{

    		if  (vm.camp_id == camp.id){

    			vm.currentCamp = camp
    			console.log(vm.currentCamp)
    		}
    	});



        });
    	console.log(vm.camp_id);

    	PostAnalysis.getGrapes(vm.camp_id).then((res)=>{
    		vm.grapes = res.data
    		console.log(res.data)
    	});


    }

    vm.init()

    vm.chartInjector = chartAppend;
    function chartAppend (){
    	 $('#char').html(" ");

    	vm.arrayOfgraphs.forEach((graph)=>{
    		  let canvas_html = graph;
    		  var element = angular.element(canvas_html);
			  $compile(element)($scope);

			  $('#char').append(element);
			  console.log(graph, vm.neqativeWordfreq)
    	});

    };

    vm.displayGrape = displayGrape

    function displayGrape (grape_id){
    	vm.grapes.forEach((grape)=>{
    		console.log(grape)
    		if  (grape_id == grape.id){

    			vm.graphAnalysis = SortAnalysis.sortObj(grape.grapeObj.tweets, grape.grapeObj.tumblrPosts);
    			ChartService.chartGenerator(vm.graphAnalysis, vm);

    			vm.chartInjector()

    		}
    	});
    }



    $(document).on('click', '.grape', function(){
        $('.grape.selected').removeClass('selected');
        $(this).addClass('selected');
    });



}

Campaigns.$inject = ['$http', '$state', 'SERVER','$scope', '$compile', '$stateParams', 'PostAnalysis', 'SortAnalysis', 'ChartService'];
