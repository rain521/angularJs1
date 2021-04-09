/**
 * @author  https://github.com/silence717
 * @date on 2016/10/18
 */
(function(angular) {

	angular
		.module('app.demoModule.rain')
		.config(config);

	config.$inject = ['$stateProvider'];

	function config($stateProvider) {
		$stateProvider
			.state('demo.rain', {
				url: '/rain',
				templateUrl: '../src/app/demo/amount/rain/index.html',
				controller: 'RainController',
				controllerAs: 'vm',
				resolve: {
					entity: ['$stateParams', function ($stateParams) {
						return '111111';
					}]
				}
			})
			.state('demo.rain1', {
				url: '/rain1',
				templateUrl: '../src/app/demo/amount/rain/index1.html',
				controller: 'Rain1Controller',
				controllerAs: 'vm',
				resolve: {
					entity: ['$stateParams', function ($stateParams) {
						return '22222';
					}]
				}
			})
		;
	}
})(window.angular);
