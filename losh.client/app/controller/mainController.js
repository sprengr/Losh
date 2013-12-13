Ext.define('LocationSharing.controller.mainController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            uploadButton: '#uploadButton'
        },
        control: {
            logInButton: {
                tap: 'login'
            },
            uploadButton: {
              tap: 'upload'
            }
        }
    },
    
    launch: function(app) {
        //TODO check if loged in
    },

    login: function(){
        debugger;
    },

    upload: function(){
        var markerModel = Ext.ModelMgr.getModel('LocationSharing.model.markerModel');
        markerModel.load('current', {
          success: function(marker){
            debugger;
            Ext.Ajax.request({
                           url: 'http://localhost:8099/locations',
                           method: 'POST',  
                           params: marker.data,
                           success: function(response, opts) {
                              var obj = Ext.decode(response.responseText);
                              console.log(obj[0].name);
                           },
                           failure: function(response, opts) {
                              console.log('server-side failure with status code ' + response.status);
                           }
                        });
          }
        })
        
    }
});
