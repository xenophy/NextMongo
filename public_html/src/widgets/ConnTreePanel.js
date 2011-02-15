/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next Mongo
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.nextjs.net
 */

// {{{ Ext.tree.ConnTreePanel

//Ext.tree.ConnTreePanel = Ext.extend(Ext.tree.TreePanel, {
Ext.tree.ConnTreePanel = Ext.extend(Ext.Panel, {

    // {{{ initComponent

    initComponent : function() {

        var me = this;

        // スーパークラスメソッドコール
        Ext.tree.ConnTreePanel.superclass.initComponent.call(me);

    }

    // }}}

});

// }}}
// {{{ xtype

Ext.reg('conntree', Ext.tree.ConnTreePanel);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
