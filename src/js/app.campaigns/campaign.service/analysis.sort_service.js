import _ from 'lodash';

function SortAnalysis (){

	this.sortObj = sortAnalysis 
	

	function sortAnalysis (obj1, obj2){
		let objss = obj1.concat(obj2);
		console.log(objss);
		let graphArrays = {}
		graphArrays.posts= {}
		graphArrays.words= {}
	    graphArrays.posts.allPositive = [];
		graphArrays.posts.allNegative = [];
		graphArrays.words.allPositive = [];
		graphArrays.words.allNegative = [];
		graphArrays.posts.veryPositive = [];
		graphArrays.posts.positive = [];
		graphArrays.posts.littlePositive = [];
		graphArrays.posts.neutral = [];
		graphArrays.posts.littleNegative = [];
		graphArrays.posts.negative = [];
		graphArrays.posts.veryNegative = [];


		graphArrays.words.veryPositive = [];
		graphArrays.words.positive = [];
		graphArrays.words.littlePositive = [];
		graphArrays.words.neutral = [];
		graphArrays.words.littleNegative = [];
		graphArrays.words.negative = [];
		graphArrays.words.veryNegative = [];

    	objss.forEach(function(postObj){

    		let post = postObj.sentiment.score;


    		



    		if (post >= 0.6){

    			graphArrays.posts.veryPositive.push(postObj)

    			graphArrays.posts.allPositive.push(postObj)

    		} else if(post >= 0.29999 && post <= 0.59999){

    			graphArrays.posts.positive.push(postObj)
    			graphArrays.posts.allPositive.push(postObj)

    		} else if(post > 0 && post <= 0.29999){

    			graphArrays.posts.littlePositive.push(postObj)
    			graphArrays.posts.allPositive.push(postObj)    			

    		} else if(post == 0){
    			graphArrays.posts.neutral.push(postObj)    			

    		} else if(post >= -0.29999 && post < 0){

    			
    			graphArrays.posts.littleNegative.push(postObj)
    			graphArrays.posts.allNegative.push(postObj)    			

    		} else if(post >= -0.59999 && post < -0.29999){

				
    			graphArrays.posts.negative.push(postObj)
    			graphArrays.posts.allNegative.push(postObj) 

    		} else if( post <= -0.6){

    			
    			graphArrays.posts.veryNegative.push(postObj)
    			graphArrays.posts.allNegative.push(postObj) 
    		};

    		postObj.sentiment.keywords.forEach((keyword)=>{

    			

            		if (keyword.score >= 0.6){


    			
    			graphArrays.words.veryPositive.push(keyword);
    			graphArrays.words.allPositive.push(keyword);

    		} else if(keyword.score >= 0.29999 && keyword.score <= 0.59999){

    			
    			graphArrays.words.positive.push(keyword);
    			graphArrays.words.allPositive.push(keyword);

    		} else if(keyword.score > 0 && keyword.score <= 0.29999){

    			
    			graphArrays.words.littlePositive.push(keyword);
    			graphArrays.words.allPositive.push(keyword);    			

    		} else if(keyword.score == 0){

    			
    			graphArrays.words.neutral.push(keyword);

    		} else if(keyword.score >= -0.29999 && keyword.score < 0){

    			
    			graphArrays.words.littleNegative.push(keyword);
    			graphArrays.words.allNegative.push(keyword);

    		} else if(keyword.score >= -0.59999 && keyword.score < -0.29999){

    			
    			graphArrays.words.negative.push(keyword);
    			graphArrays.words.allNegative.push(keyword);

    		} else if( keyword.score <= -0.6){

    			
    			graphArrays.words.veryNegative.push(keyword);
    			graphArrays.words.allNegative.push(keyword);
    		};



    		});

        
            		
    	});
	_.sortBy(graphArrays.posts.allPositive, function(y){ return y.sentiment.score;} )    
    _.sortBy(graphArrays.posts.allNegative, function(y){ return y.sentiment.score;} ) 
    _.reverse(graphArrays.posts.allNegative)   

	_.sortBy(graphArrays.words.allPositive, function(y){ return y.score;} )    
    _.sortBy(graphArrays.words.allNegative, function(y){ return y.score;} )
    _.reverse(graphArrays.posts.allNegative) 

    let sortPositivefreq = function(){ 

        let positiveFreqarray = []
    	graphArrays.words.allPositive.forEach((word, index) =>{
        
    	let dubbedArray = graphArrays.words.allPositive;
    	let newWordobj  = word;
    	newWordobj.freq = 1;


    	dubbedArray.forEach((matched, index2) =>{
    		if (word.word === matched.word){
    			// console.log(word, index, matched, index2);
    			newWordobj.freq += 1;
    			dubbedArray.splice(index2, 1);

    		}
    	});



        positiveFreqarray.push( newWordobj);
    });
    	_.uniq(positiveFreqarray);
    	positiveFreqarray = _.sortBy(positiveFreqarray, function(y){ return y.freq;} );
    	return _.reverse(positiveFreqarray);

    };


    let sortNegativefreq = function(){ 

        let negativeFreqarray = []
    	graphArrays.words.allNegative.forEach((word, index) =>{
        
    	let dubbedArray = graphArrays.words.allNegative;
    	let newWordobj  = word;
    	newWordobj.freq = 1;


    	dubbedArray.forEach((matched, index2) =>{
    		if (word.word === matched.word){
    			// console.log(word, index, matched, index2);
    			newWordobj.freq += 1;
    			dubbedArray.splice(index2, 1);

    		}
    	});

        negativeFreqarray.push( newWordobj);
    });
    	_.uniq(negativeFreqarray);
    	negativeFreqarray = _.sortBy(negativeFreqarray, function(y){ return y.freq;} )
    	return _.reverse(negativeFreqarray); 

    };

    graphArrays.words.freqPositive = sortPositivefreq();
    graphArrays.words.freqNegative = sortNegativefreq();


    	let sentimentFreq = function () {
    		// console.log(graphArrays)
    		

    		// console.log('hasjfdh')
    		graphArrays.sentimentFreq = {};
    		graphArrays.sentimentFreq.littlePositive = 0;
    		graphArrays.sentimentFreq.positive = 0;
    		graphArrays.sentimentFreq.veryPositive = 0;
    		graphArrays.sentimentFreq.littleNegative = 0;
    		graphArrays.sentimentFreq.negative = 0;
    		graphArrays.sentimentFreq.veryNegative = 0;

		  graphArrays.words.freqPositive.forEach((eachword)=>{
			let theWord = eachword;


		if (theWord.score >= 0.6){

    			graphArrays.sentimentFreq.veryPositive += theWord.freq 

    			

    		} else if(theWord.score >= 0.29999 && theWord.score <= 0.59999){

    			graphArrays.sentimentFreq.positive += theWord.freq

    		} else if(theWord.score > 0 && theWord.score <= 0.29999){


				graphArrays.sentimentFreq.littlePositive += theWord.freq  
 			} 




    	});



		  graphArrays.words.freqNegative.forEach((eachword)=>{
			let theWord = eachword;

   			if(theWord.score >= -0.29999 && theWord.score < 0){

    			
  				graphArrays.sentimentFreq.littleNegative += theWord.freq  			

    		} else if(theWord.score >= -0.59999 && theWord.score < -0.29999){

				
				graphArrays.sentimentFreq.negative += theWord.freq
				// console.log(theWord.freq)

    		} else if( theWord.score <= -0.6){

    			
    			graphArrays.sentimentFreq.veryNegative += theWord.freq
    		};




    	});

    	
};
    sentimentFreq();


    // console.log(graphArrays);
 	return graphArrays;

	};





}

export {SortAnalysis};
