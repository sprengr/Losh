var locations = (function(){
	var self = {};

	self.data = [];

	self.addLocation = function(longitude, latitude){
		console.log('adding location');
		self.data.add({longitude: longitude, latitude: latitude})
	};

	self.getLocations = function(){
		return self.data;
	};

	self.printLocations = function(){
		for (var i = 0; i < self.data.length ; i++) {
			console.log('longitude:' + self[i].longitude + '\\tlatitude:' + self[i].latitude);
		};
	};

	return self;
}());

module.exports = {
	addLocation : function(){
		locations.addLocation();
	},
	printLocations : function(){
		locations.printLocations();
	}
};