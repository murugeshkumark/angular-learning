import { Component } from '@angular/core';

@Component({
   selector: 'app-server', //tag name to use this component, should be a string
   templateUrl: './server.component.html' //external file that is template for this file
}
)
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    getServerStatus(){
        return this.serverStatus;
    }

}
