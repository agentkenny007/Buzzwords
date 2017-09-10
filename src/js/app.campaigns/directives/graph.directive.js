function graphElement (){
	return {
		restrict: 'E',
		scope: {
			name: '@temp'
		},
		template: $scope.temp,
		controller: function($scope, getmovies){
			let vm = this 
			// vm.move = getmovies.fetch($scope.name);

		},
		controllerAs: 'vm'

	}

}

graphElement.$inject = [];
export {graphElement}