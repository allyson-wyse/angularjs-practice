(function(){

	var app = angular.module('store', [ ]);

	var items = [
		{
			name: 'Scarf',
			price: 24.99,
			description: 'Minim error eleifend no pro, ea tale diam quo, possit ' 
				+ 'eloquentiam te mea.', 
			inStock: true,
			images: [
				{
					full: '../static/images/scarves/scarf-gray.png',
					thumb: '../static/images/scarves/scarf-gray-thumb.png'
				},
				{
					full: '../static/images/scarves/scarf-tan.png',
					thumb: '../static/images/scarves/scarf-tan-thumb.png'
				},
				{
					full: '../static/images/scarves/scarf-white.png',
					thumb: '../static/images/scarves/scarf-white-thumb.png'
				}
			]
		},
		{
			name: 'Hat',
			price: 19.99,
			description: 'Per debet praesent gloriatur no, eu mea ipsum referrentur, '
				+ 'no pro minim novum oblique.',
			inStock: true,
			images: [
				{
					full: '../static/images/hats/hat-gray.png',
					thumb: '../static/images/hats/hat-gray-thumb.png'
				},
				{
					full: '../static/images/hats/hat-brown.png',
					thumb: '../static/images/hats/hat-brown-thumb.png'
				},
				{
					full: '../static/images/hats/hat-white.png',
					thumb: '../static/images/hats/hat-white-thumb.png'
				}
			]
		}
	];
	
	app.controller('storeCtrl', function(){
		this.products = items;  // "this" refers to the controller; creates attribute "product" on the controller
	});
	
})();

// Stopped on page 64 