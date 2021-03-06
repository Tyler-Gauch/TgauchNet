'use strict';

import React from 'react';

// empty scripts object, this keeps track of all the scripts that have been loaded dynamically.
const scripts = {};


const DynamicImport = ( component, callback, script_name ) => {

    const allPreviousLoaded = Object.keys(scripts).every( (k) => { return scripts[k] === true });


    if ( ! scripts[script_name] ) {
        scripts[script_name] = false;
    }

    if ( scripts[script_name] && scripts[script_name] === true ) {
        return component.then( response => {
            return callback( null, response.default );
        });
    }


    const allLoaded = Object.keys(scripts).every( (k) => { return scripts[k] === true });
    let loading_message = '';

    if ( allPreviousLoaded ) { loading_message = () => 'Loading content...' }

    return component.then( response => {
        if ( allPreviousLoaded ) { loading_message(); }
        scripts[script_name] = true;
        return callback( null, response.default );
    })
    .catch( error => {
        throw new Error(`Component loading failed: ${error}`);
    });

}

export default DynamicImport;