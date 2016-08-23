
function ChartService (){

	this.chartGenerator = chartGenerator;

	function chartGenerator (obj, viewmodel){

		viewmodel.labels = ["little Positive", "Positive", "Very Positive","Neutral", "little Negative", "Negative", "Very Negative"];
		viewmodel.postData = [obj.posts.littlePositive.length,
					   obj.posts.positive.length, 
					   obj.posts.veryPositive.length, 
					   obj.posts.neutral.length, 
					   obj.posts.littleNegative.length, 
					   obj.posts.negative.length,
					   obj.posts.veryNegative.length];

		viewmodel.wordData = [obj.words.littlePositive.length,
					   obj.words.positive.length, 
					   obj.words.veryPositive.length, 
					   obj.words.neutral.length, 
					   obj.words.littleNegative.length, 
					   obj.words.negative.length,
					   obj.words.veryNegative.length];

		viewmodel.neqativeWordfreqLabel = obj.words.freqNegative.map(function(x){
			return x.word;
		});  

		viewmodel.neqativeWordfreq = obj.words.freqNegative.map(function(x){
			console.log(x);
			return x.freq;
		});

		viewmodel.positiveWordfreqLabel = obj.words.freqPositive.map(function(x){
			return x.word;
		});  

		viewmodel.positiveWordfreq = obj.words.freqPositive.map(function(x){
			console.log(x);
			return x.freq;
		});


   		viewmodel.freqRadarlabels = ["little Positive", "Positive", "Very Positive", "little Negative", "Negative", "Very Negative"];
   		viewmodel.freqRadardata   = [obj.sentimentFreq.littlePositive,
					   obj.sentimentFreq.positive, 
					   obj.sentimentFreq.veryPositive,  
					   obj.sentimentFreq.littleNegative, 
					   obj.sentimentFreq.negative,
					   obj.sentimentFreq.veryNegative];







	    viewmodel.arrayOfgraphs = [`<h1>Posts Sentiments</h1><canvas id="pie" class="chart chart-pie"
  chart-data="vm.postData" chart-labels="vm.labels" chart-options="options">
</canvas> `, `<h1>Word Sentiments</h1><canvas id="pie" class="chart chart-pie"
  chart-data="vm.wordData" chart-labels="vm.labels" chart-options="options">
</canvas> `, `<h1>Positive Sentiment Freqency</h1><canvas id="polar-area" class="chart chart-polar-area"
  chart-data="vm.positiveWordfreq" chart-labels="vm.positiveWordfreqLabel" chart-options="options">
</canvas> `,`<h1>Negative Sentiment Freqency</h1><canvas id="polar-area" class="chart chart-polar-area"
  chart-data="vm.neqativeWordfreq" chart-labels="vm.neqativeWordfreqLabel" chart-options="options">
</canvas> `,`<h1> Overall Sentiment Freqency</h1><canvas id="radar" class="chart chart-radar"
  chart-data="vm.freqRadardata" chart-options="options" chart-labels="vm.freqRadarlabels">
</canvas>  `];

	   	viewmodel.piePost = `<h1>Posts Sentiments</h1><canvas id="pie" class="chart chart-pie"
  chart-data="vm.postData" chart-labels="vm.labels" chart-options="options">
</canvas> `  
		
	   	viewmodel.pieWord = `<h1>Word Sentiments</h1><canvas id="pie" class="chart chart-pie"
  chart-data="vm.wordData" chart-labels="vm.labels" chart-options="options">
</canvas> `

		viewmodel.PolradarwordsMCP = `<h1>Positive Sentiment Freqency</h1><canvas id="polar-area" class="chart chart-polar-area"
  chart-data="vm.positiveWordfreq" chart-labels="vm.positiveWordfreqLabel" chart-options="options">
</canvas> `   

		viewmodel.PolradarwordsMCN = `<h1>Negative Sentiment Freqency</h1><canvas id="polar-area" class="chart chart-polar-area"
  chart-data="vm.neqativeWordfreq" chart-labels="vm.neqativeWordfreqLabel" chart-options="options">
</canvas> `
											
		viewmodel.PolradarWordfreq = `<h1> Overall Sentiment Freqency</h1><canvas id="radar" class="chart chart-radar"
  chart-data="vm.freqRadardata" chart-options="options" chart-labels="vm.freqRadarlabels">
</canvas>  `

	};


}

export {ChartService};
