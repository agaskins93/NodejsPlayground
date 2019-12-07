import { Component } from '@angular/core';
@Component({ 
selector: 'app-server',
templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: number = 14;
  serverStatus: string = 'online';
  name: string = 'ASDFOKDSF';
  getMessage: string = 'Please turn off this server'

  returnStatusMessage() {
    return this.getMessage;
  }
}