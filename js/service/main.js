/**
 * Created by Administrator on 2017/2/17.
 */
(function (angular) {
	'use strict';
	angular.module('app.service.main', [])
		.service('MainService', ['$window', function ($window) {
			//实现本地化存储
			var localStorage = $window.localStorage;
			//读取 通过key获取出来的是一个字符串，需要解析
			var todos = localStorage['our_todo_list'] ? JSON.parse(localStorage['our_todo_list']) : [];

			//存取
			this.save = function () {
				localStorage['our_todo_list'] = JSON.stringify(todos);
			};
			this.saveCompleted = function (temp_todos) {
				todos = temp_todos;
				this.save();
			};
			this.get = function () {
				return todos;
			};
			//1 添加
			this.add = function (text) {
				todos.push(
					{
						id: getId(),
						mes: text,
						completed: false
					});
				this.save();
			};
			function getId() {
				var id = Math.random();
				for (var i = 0, len = todos.length; i < len; i++) {
					if (todos[i].id == id) {
						id = getId()
					}
				}
				return id;
			}
			//删除
			this.del = function (id) {
				for (var i = 0, len = todos.length; i < len; i++) {
					if (id == todos[i].id) {
						todos.splice(i, 1);
						break;
					}
				}
				this.save();
			};
			//3 清除完成
			this.clearCompleted = function () {
				var noCompleted = [];
				for (var i = 0, len = todos.length; i < len; i++) {
					if (!todos[i].completed) {
						noCompleted.push(todos[i])
					}
				}
				todos = noCompleted;
				this.save();
				return todos;
			};
			//4 检测是否存在完成项
			this.existCompleted = function () {
				for(var i=0, len = todos.length; i < len; i++) {
					if (todos[i].completed) {
						return true;
					}
				}
				return false;
			};
			//5 全选

			var now = true;
			this.toggleCompleted = function ($scope) {
				now = !$scope.d;
				for (var i = 0, len = todos.length; i < len; i++) {
					todos[i].completed = now;
				}
				$scope.d = now;
				now = !now;
				this.save();

			};
			//6 未完成

			this.todoCount = function ($scope) {
				var count = 0;
				for (var i = 0, len = todos.length; i < len; i++) {
					if (!todos[i].completed) {
						count++;
					}
				}
				if (count) {
					$scope.d = false;
				} else {
					$scope.d = true;
				}
				return count;
			};
		}])
})(angular);
