import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent {
  serverId = null;
  serverStatus = null;

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    this.serverId = Math.floor((Math.random() * 100) + 1);
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getServerId(){
    return this.serverId;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
