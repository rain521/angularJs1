/**
 * @author  https://github.com/silence717
 * @date on 2016/10/18
 */
(function() {

	angular
		.module('app.demoModule.amount')
		.controller('AmountController', AmountController);
	AmountController.$inject = ['$q', '$scope', '$state'];
	function AmountController($q, $scope, $state) {
		$scope.rain = function () {
			$state.go('demo.rain')
		}
	}
})();
