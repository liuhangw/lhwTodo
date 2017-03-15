(function (window, angular) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var app = angular.module('myToDoMvc', ['ngRoute','app.controller.main']);

	//配置路由
	app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/:status?', {
				controller: 'MainController',
				templateUrl: 'todomvc_template'
			})
			.otherwise({
				redirectTo: '/all'
			})
	}]);
	// app.controller('MainController', ['$scope','$location' ,function ($scope,$location) {
	// app.controller('MainController', ['$scope', '$routeParams', '$route', function ($scope, $routeParams, $route) {
	// 	//根据不同的status改变色了selector的值
	// 	$scope.selector = {};
	// 	var status = $routeParams.status;
	// 	console.log(status);
	// 	switch (status) {
	// 		case 'active':
	// 			$scope.selector = {completed: false};
	// 			break;
	// 		case 'completed':
	// 			$scope.selector = {completed: true};
	// 			break;
	// 		default:
	// 			//updateParams可以更新参数
	// 			//这是为了解决我们在输入其他值， 没有匹配到active和completed时可以把url里面最后面的字符串清除
	// 			$route.updateParams({status: ''});
	// 			$scope.selector = {};
	// 			// selector.completed === undefined;
	// 			break;
	// 	}
	// 	$scope.comparator = function (source, target) {
	// 		return angular.equals(source, target);
	// 	};
    //
    //
	// 	$scope.text = '';
	// 	$scope.todos = [
	// 		{id: 1, mes: '吃饭', completed: false},
	// 		{id: 2, mes: '睡觉', completed: true},
	// 		{id: 3, mes: '打豆豆', completed: false}
	// 	];
	// 	// //1 添加
	// 	// $scope.add = function () {
	// 	// 	if ($scope.text != '') {
	// 	// 		$scope.todos.push(
	// 	// 			{
	// 	// 				id: getId(),
	// 	// 				mes: $scope.text,
	// 	// 				completed: false
	// 	// 			});
	// 	// 	}
	// 	// 	$scope.text = ''
	// 	// };
	// 	// function getId() {
	// 	// 	var id = Math.random();
	// 	// 	for (var i = 0, len = $scope.todos.length; i < len; i++) {
	// 	// 		if ($scope.todos[i].id == id) {
	// 	// 			id = getId()
	// 	// 		}
	// 	// 	}
	// 	// 	return id;
	// 	// }
    //
	// 	//2 删除
	// 	$scope.del = function (id) {
	// 		for (var i = 0, len = $scope.todos.length; i < len; i++) {
	// 			if (id == $scope.todos[i].id) {
	// 				$scope.todos.splice(i, 1);
	// 				break;
	// 			}
	// 		}
	// 	};
	// 	//3 清除完成
	// 	$scope.clearCompleted = function () {
	// 		var noCompleted = [];
	// 		for (var i = 0, len = $scope.todos.length; i < len; i++) {
	// 			if (!$scope.todos[i].completed) {
	// 				noCompleted.push($scope.todos[i])
	// 			}
	// 		}
	// 		$scope.todos = noCompleted;
	// 	};
	// 	//4 检测完成
	// 	$scope.existCompleted = function () {
	// 		for (var i = 0, len = $scope.todos.length; i < len; i++) {
	// 			if ($scope.todos[i].completed) {
	// 				return true;
	// 			}
	// 			return false;
	// 		}
	// 	};
	// 	//5 编辑
	// 	$scope.editId = -1;
	// 	$scope.editing = function (id) {
	// 		$scope.editId = id;
	// 	};
	// 	$scope.save = function () {
	// 		$scope.editId = -1;
	// 	};
	// 	//6 全选
	// 	$scope.d = false;
	// 	var now = true;
	// 	$scope.toggleCompleted = function () {
	// 		now = !$scope.d;
	// 		for (var i = 0, len = $scope.todos.length; i < len; i++) {
	// 			$scope.todos[i].completed = now;
	// 		}
	// 		$scope.d = now;
	// 		now = !now;
    //
	// 	};
	// 	//7 未完成
    //
	// 	$scope.todoCount = function () {
	// 		var count = 0;
	// 		for (var i = 0, len = $scope.todos.length; i < len; i++) {
	// 			if (!$scope.todos[i].completed) {
	// 				count++;
	// 			}
	// 		}
	// 		if (count) {
	// 			$scope.d = false;
	// 		} else {
	// 			$scope.d = true;
	// 		}
	// 		return count;
	// 	};
	// 	//8 选择显示 实现筛选功能
    //
	// 	//BOM  哈希值  com .cn .org
	// 	//http://8080www.xdyuan.applinzi.com/#active?start=0&count=10
	// 	// console.log(window.location.hash);  //     #/active
	// 	// console.log($location.path()); ///    /active
    //
	// 	//
	// 	// $scope.selector = {'completed': ''};
	// 	// $scope.$loca = $location;
	// 	// $scope.$watch('$loca.path()', function (now, old) {
	// 	// 	switch (now) {
	// 	// 		case '/active':
	// 	// 			$scope.selector = {'completed': 'false'};
	// 	// 			break;
	// 	// 		case '/completed':
	// 	// 			$scope.selector = {'completed': 'true'};
	// 	// 			break;
	// 	// 		default:
	// 	// 			$scope.selector = {'completed': ''};
	// 	// 			break;
	// 	// 	}
	// 	// });
	// 	//9 检测是否存在事件
    //
    //
	// }]);


})(window, angular);
