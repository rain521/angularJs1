/**
 * @author  https://github.com/silence717
 * @date on 2016/10/18
 */
(function() {

	angular
		.module('app.demoModule.rain')
		.controller('RainController', RainController)
		.controller('Rain1Controller', Rain1Controller);
	RainController.$inject = ['$q', '$scope', 'entity'];
	Rain1Controller.$inject = ['$q', '$scope', 'entity'];
	function RainController($q, $scope, entity) {
		var vm = this;
		console.log(entity)
	}
	function Rain1Controller($q, $scope, entity) {
		var vm = this;
		console.log('Rain1Controller')
		console.log(entity)
	}
})();
