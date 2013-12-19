var locations = (function(){
	var self = {};

	self.data = [];

	self.addLocation = function(longitude, latitude, street, name){
		console.log('adding location of ' + name);
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();

		var date = dd + '.' + mm + '.' + yyyy + ' - ' + today.getHours() + ':' + today.getMinutes();
		self.data.push({longitude: longitude, latitude: latitude, street: street, date: date, name: name})
	};

	self.getLocations = function(){
		console.log('getting ' + self.data.length + ' locations');
		return self.data;
	};

	self.printLocations = function(){
		for (var i = 0; i < self.data.length ; i++) {
			console.log('longitude:' + self[i].longitude + '\\tlatitude:' + self[i].latitude);
		};
	};

	self.clear = function(){
		self.data = [];
	}

	return self;
}());

module.exports = {
	addLocation : function(longitude, latitude, street, name){
		locations.addLocation(longitude, latitude, street, name);
	},
	getLocations : function(){
		return locations.getLocations();
	},
	printLocations : function(){
		locations.printLocations();
	},
	clear: function(){
		locations.clear();
	}
};