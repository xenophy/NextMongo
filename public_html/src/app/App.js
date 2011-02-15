/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next Mongo
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.nextjs.net
 */

// {{{ Ext.app.App

Application = Ext.app.App = new (Ext.extend(Object, {

    // {{{ init

    init : function() {

        var me = this;

        // ビューポート生成
        me.viewport = new Ext.Viewport({
            layout: 'border',
            items: [{
                region: 'north',
                html: 'Next Mongo'
            },{
                region: 'west',
                xtype: 'conntree',
                width: 250
            },{
                region: 'center'
            },{
                region: 'south',
                html: 'Copyright &copy; 2011 Xenophy.CO.,LTD All rights Reserved. powered by Next JS.'
            }]
        });

    }

    // }}}

}));

// }}}
// {{{ onReady

Ext.onReady(Application.init, Application);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
