var app = angular.module("myApp", []);

var contacts = [{name: 'Sarah Vallo', email: 'sarah.vallo@53.com'},
				{name: 'Rachel Eubanks', email: 'rachel.eubanks@53.com'},
				{name: 'Amy Nguyen', email: 'amy.nguyen@53.com'}];

app.controller("mainCtrl", function($scope) {
	$scope.contacts = contacts;
					
	$scope.addNew = function(contact) {
		$scope.contacts.push(contact);
		$scope.contact = {};
	};
});