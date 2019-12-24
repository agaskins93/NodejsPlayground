import { Component } from '@angular/core';
@Component({ 
selector: 'app-server',
templateUrl: './server.component.html',
styles: [` .online
{color: white;}
`]
})
export class ServerComponent {
  serverId: number = 14;
  serverStatus: string = 'online';
  name: string = 'ASDFOKDSF';
  getMessage: string = 'Please turn off this server'
  

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }
  
  returnStatusMessage() {
    return this.getMessage;
    }
    
  getColor() { 
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}