import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
 //selector:'.app-servers',
//selector:'[app-servers]',

  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverCreationStatus = 'No server was created';
serverName = 'Test Server';
serverCreated = false;  
servers = ['Server1', 'Server2']
  
  constructor() {
  setTimeout(() => {
    this.allowNewServer = true;
  }, 2000);
  }
  

  ngOnInit() {
  }
  
onCreateServer() {
this.servers.push(this.serverName);
this.serverCreated = true; 
this.serverCreationStatus = 'Server was created. Your server name is : ' + this.serverName;  
 }
  
onUpdateServerName(event: Event) {
 this.serverName = (<HTMLInputElement>event.target).value;
}  
}
