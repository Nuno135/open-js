'use strict';

const EventEmitter = require('events').EventEmitter;

class Client extends EventEmitter {
    constructor(token, options) {
        super();
        
        this.options = options;

        this.token = token; 
    }
};

module.exports = Client;
