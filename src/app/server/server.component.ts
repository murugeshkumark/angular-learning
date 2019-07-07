import { Component } from '@angular/core';

@Component({
    selector: 'app-server', //tag name to use this component, should be a string
    templateUrl: './server.component.html', //external file that is template for this file,
    styles: [`
   .online {
       color : white;
   }
   `]
}
)
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

}
