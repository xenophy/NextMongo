/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next Mongo
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('../NextJS/lib/NX');

// }}}
// {{{ create server

NX.createServer({
    servers: [{
        path: __dirname,
        port: 3000
    }]
}).listen();

console.log('Server running at http://127.0.0.1:3000/');

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
