Ext.define('LocationSharing.view.Upload', {
    extend: 'Ext.form.Panel',
    xtype: 'upload',
    requires: ['Ext.form.FieldSet', 'Ext.form.Password', 'Ext.Label', 'Ext.Img'],
    config: {
        title: 'Upload',
        items: [
                    {
                        xtype: 'image',
                        //src: Ext.Viewport.getOrientation() == 'portrait' ? '../../../img/login.png' : '../../../img/login-small.png',
                        style: Ext.Viewport.getOrientation() == 'portrait' ? 'width:80px;height:80px;margin:auto' : 'width:40px;height:40px;margin:auto'
                    },
                    {
                        xtype: 'label',
                        html: 'Login failed. Please enter the correct credentials.',
                        itemId: 'signInFailedLabel',
                        hidden: true,
                        hideAnimation: 'fadeOut',
                        showAnimation: 'fadeIn',
                        style: 'color:#990000;margin:5px 0px;'
                    },
                    {
                        xtype: 'fieldset',
                        title: 'Upload',
                        instructions: 'Do you want to upload your current position?',
                        items: [
                            {
                                xtype: 'textfield',
                                //placeHolder: 'Username',
                                id: 'uploadUserNameTextField',
                                name: 'uploadUserNameTextField',
                                disabled: true,
                                value: 'admin'
                                //required: true
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        id: 'uploadButton',
                        ui: 'action',
                        padding: '10px',
                        text: 'Upload'
                    }
         ]
    }
    
});