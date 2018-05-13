const EventEmitter = require('events');
const WebSocketConnection = require('./WebSocketConnection');

class WebSocketManager extends EventEmitter {
    constructor(client) {
        super();
        this.client = client;
        this.connection = null;
    }

    connect(gateway) {
        if (!this.connection) {
          this.connection = new WebSocketConnection(this, gateway);
          return true;
        }
    }
}
