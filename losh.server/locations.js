var locations = (function(){
	var self = {};

	self.data = [];

	self.addLocation = function(longitude, latitude, street){
		console.log('adding location');
		self.data.push({longitude: longitude, latitude: latitude, street: street})
	};

	self.getLocations = function(){
		console.log('getting ' + self.data.length + 'locations');
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
	addLocation : function(longitude, latitude, street){
		locations.addLocation(longitude, latitude, street);
	},
	getLocations : function(){
		return locations.getLocations();
	},
	printLocations : function(){
		locations.printLocations();
	}
};