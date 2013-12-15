Ext.define('LocationSharing.config.Config', {
  singleton: true,
 
  config: {
    locationsUrlGet: 'http://localhost:8099/locations',
    locationsUrlPost: 'http://localhost:8099/locations',
    loginUrlPost: 'http://localhost:8099/login',
    historyMarkerIcon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
  },
 
  constructor: function(config) {
    this.initConfig(config);
    return this;
  },
 
  isWebApp: function() {
    if(document.URL.indexOf('http') != -1) {
      return true;
    }
    return false;
  }
 
});