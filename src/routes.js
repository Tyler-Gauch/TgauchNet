'use strict';

import DynamicImport from 'app/components/DynamicImport';

const WebsiteRoutes = {
    childRoutes: [

        {
            path: '/',
            indexRoute: {
                getComponent(location, cb) {
                    DynamicImport(
                        import(/* webpackChunkName: "home" */'app/content/Home'),
                        cb,
                        'home'
                    );
                }
            },
        },

        {
            path: '/contacts',
            indexRoute: {
                getComponent(location, cb) {
                    DynamicImport(
                        import('app/content/Contacts'),
                        cb,
                        'contacts'
                    );
                }
            }
        }


    ],
};

export default WebsiteRoutes;