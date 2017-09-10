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
    vm.showForm = false;


        vm.chartInjector = chartAppend;
    function chartAppend (){

    	vm.arrayOfgraphs.forEach((graph)=>{
    		  let canvas_html = graph,
                element = angular.element(canvas_html),
                buttons = `<button ng-click="vm.submitAnalysis()">Add to Existing Campaign</button>
                <button ng-click="vm.submitNewCampaign()">Add To New Campaign</button>`;
			  $compile(element)($scope);
			 $('.loading').remove();
              $('#char').append(element).find('.add_div').fadeIn(750);

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

	// 			TweetService.campGet(vm.analysisArray).then((res)=>{
	// 	console.log('hi shshshshshsh')
	// 	console.log(res.data);
	// })
		});

    vm.selectCampaigns = selectCampaigns;

    function selectCampaigns () {
    	vm.showForm =false
    	PostAnalysis.getCampaigns().then((res)=>{
    		console.log(res.data);
    		vm.campaign = res.data;
    		console.log(vm.campaign);

// 	    	let campForm = `<form>
// 	<select ng-model="campId" >
// 		<option ng-repeat="camp in vm.campaign" value="{{camp.id}}">{{camp.title}}</option>

// 	</select>
// 	<button ng-click="sendGrape(vm.analysisArray, campId)">Add</button>
// </form>`;
//     		var element = angular.element(campForm);
// 			$compile(element)($scope);
//     		$('.selectCampdiv').append(campForm);

    	});



    }

    vm.sendGrape = sendGrape;
    vm.sendTonewCamp = sendTonewCamp;
    vm.newCampform = newCampform;

    function sendGrape (obj, camp_id){
    	console.log(obj, camp_id)
    	PostAnalysis.postTocampaign(obj, camp_id).then((res)=>{
    		console.log(res);
    		$('.add_div').html(" ");
    	});
    }

    function sendTonewCamp (title, desc) {
    	vm.showForm = true;
    	let newCamp_id;
    	console.log(title, desc)
    	    	PostAnalysis.createCampaigns(title, desc).then((res)=>{

    		console.log(res.data)
    		newCamp_id = res.data.id;

	    	PostAnalysis.postTocampaign(vm.analysisArray, newCamp_id).then((res)=>{
    		console.log(res.data);
    	}).then((res)=>{

    		PostAnalysis.getGrapes(newCamp_id).then((res)=>{
    			console.log(newCamp_id);
    			console.log(res.data);
    			$('.add_div').html(" ");
    		});
    	});

    	});
    }

    function newCampform (title, desc) {
    	vm.showForm = true;


    }





  //     vm.options = {tooltips: { enabled: false }}

  	vm.options = {
        legend: {
            display: true,

        }
    }





}

Create.$inject = ['$http', '$state', 'SERVER','$scope', '$compile', '$stateParams','TweetService', 'SortAnalysis', 'ChartService', 'PostAnalysis'];
