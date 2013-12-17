Ext.define('LocationSharing.controller.mainController', {
    extend: 'Ext.app.Controller',
    requires: [
        'LocationSharing.config.Config'
    ],

    config: {
        refs: {
            uploadButton: '#uploadButton',
            logInButton: '#logInButton',
            uploadTab: '#uploadTab',
            userNameTextField: '#userNameTextField'
        },
        control: {
            logInButton: {
                tap: 'login'
            },
            uploadButton: {
              tap: 'upload'
            },
            'main': { activeitemchange: 'mainTabChange' }
        }
    },
    
    launch: function(app) {
      localStorage.removeItem('LocationSharing.model.userModel-currentUser');
    },


    mainTabChange: function(tabPanel, tab, oldTab){
        this.checkLogin(tab);

        if(tab.id==='historyTab')
            this.getApplication().getController('historyController').loadMarkers();
    },

    checkLogin: function(tab){
      var localTab = tab;

      if (!!tab.needsLogin){
        var userModel = Ext.ModelMgr.getModel('LocationSharing.model.userModel');
        userModel.load('currentUser', {
          success: function(user){
          if (!!user.data.isLoggedIn){
            localTab.items.each(function(item){
              item.setHidden(!item.needsLogin);
            });
          }
        }});
      } 
    },

    login: function(button){
        var user = Ext.getCmp('userNameTextField').getValue(),
            password = Ext.getCmp('passwordTextField').getValue();
        var buttonParent = button.up();

        Ext.getCmp('uploadUserNameTextField').setValue(user);

        Ext.Ajax.request(
        {
           url: LocationSharing.config.Config.getLoginUrlPost(),
           method: 'POST',  
           params: {
                user: user,
                password: password
           },
           success: function(response, opts) {
              var obj = Ext.decode(response.responseText);
              console.log('Login succesful: ' + obj);

              var userModel = Ext.create('LocationSharing.model.userModel', {
                name: user,
                isLoggedIn: true,
                id: 'currentUser'
              });
              userModel.save();
              Ext.getCmp('mainTabPanel').getActiveItem().animateActiveItem(1, {type: 'slide', direction: 'down'});
           },
           failure: function(response, opts) {
              console.log('server-side failure with status code ' + response.status);
           }
        });
    },

    upload: function(){
        var markerModel = Ext.ModelMgr.getModel('LocationSharing.model.markerModel');
        markerModel.load('currentMarker', {
          success: function(marker){
            Ext.Ajax.request(
            {
               url: LocationSharing.config.Config.getLocationsUrlPost(),
               method: 'POST',  
               params: marker.data,
               success: function(response, opts) {
                  var markerModel = Ext.create('LocationSharing.model.markerModel', {
                        longitude: marker.data.longitude,
                        latitude: marker.data.latitude,
                        street: marker.data.street,
                        visible: false,
                        type: 'history'});
                  markerModel.save();
               },
               failure: function(response, opts) {
                  console.log('server-side failure with status code ' + response.status);
               }
            });
          }
        })
        
    }
});
