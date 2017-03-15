/**
 * Created by Administrator on 2017/2/17.
 */
(function (window, angular) {
	'use strict';

	// Your starting point. Enjoy the ride!

	// app.controller('MainController', ['$scope','$location' ,function ($scope,$location) {
	var controllers = angular.module('app.controller.main', ['app.service.main']);
	controllers.controller('MainController', ['$scope', '$routeParams', '$route', 'MainService', function ($scope, $routeParams, $route, MainService) {
		//根据不同的status改变色了selector的值
		$scope.selector = {};
		var status = $routeParams.status;
		console.log(status);
		switch (status) {
			case 'active':
				$scope.selector = {completed: false};
				break;
			case 'completed':
				$scope.selector = {completed: true};
				break;
			default:
				//updateParams可以更新参数
				//这是为了解决我们在输入其他值， 没有匹配到active和completed时可以把url里面最后面的字符串清除
				$route.updateParams({status: ''});
				$scope.selector = {};
				// selector.completed === undefined;
				break;
		}
		$scope.comparator = function (source, target) {
			return angular.equals(source, target);
		};


		$scope.text = '';
		$scope.todos = MainService.get();
		$scope.add = function () {
			if ($scope.text != '') {
				MainService.add($scope.text);
				$scope.text = '';
			}
		};

		//2 删除
		$scope.del = function (id) {
			MainService.del(id);
		};
		//3 清除完成
		$scope.clearCompleted = function () {
			// 覆盖原先的值
			$scope.todos = MainService.clearCompleted();
		};
		//4 检测完成
		$scope.existCompleted = function () {
			return MainService.existCompleted();
		};
		//5 编辑
		$scope.editId = -1;
		$scope.editing = function (id) {
			$scope.editId = id;
		};
		$scope.save = function () {
			$scope.editId = -1;
		};
		//6 全选
		$scope.d = false;
		$scope.toggleCompleted = function () {
			MainService.toggleCompleted(this)
		};
		//7 未完成
		$scope.todoCount = function () {
			return MainService.todoCount(this);
		}

	}]);


})(window, angular);
