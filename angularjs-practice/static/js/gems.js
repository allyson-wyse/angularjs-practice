(function(){

	var app = angular.module('store', [ ]);

	var gems = [
		{
			name: 'Diamond',
			price: 129.99,
			description: 'Minim error eleifend no pro, ea tale diam quo, possit ' 
				+ 'eloquentiam te mea.', 
			inStock: true
		},
		{
			name: 'Ruby',
			price: 284.99,
			description: 'Per debet praesent gloriatur no, eu mea ipsum referrentur, '
				+ 'no pro minim novum oblique.',
			inStock: true
		},
		{
			name: 'Saphire',
			price: 89.99,
			description: 'Vis te esse elit diceret, eu malorum eripuit dissentiet sea, '
				+ 'eos ceteros neglegentur ad.',
			inStock: true
		}
	];
	
	app.controller('storeCtrl', function(){
		this.products = gems;  // "this" refers to the controller; creates attribute "product" on the controller
	});
	
})();

// Stopped on page 54 