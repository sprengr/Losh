var locations = (function(){
	var self = {};

	self.data = [];

	self.addLocation = function(longitude, latitude){
		console.log('adding location');
		self.data.push({longitude: longitude, latitude: latitude})
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
	addLocation : function(longitude, latitude){
		locations.addLocation(longitude, latitude);
	},
	getLocations : function(){
		return locations.getLocations();
	},
	printLocations : function(){
		locations.printLocations();
	}
};