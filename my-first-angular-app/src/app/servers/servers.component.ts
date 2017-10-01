import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreated = false;
  serverName = 'TestServer';
  servers = ['TestServer1', 'TestServer2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  /**
   * The template will call this function.
   * On creation of a new server.
   */

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  /**
   * The template will call this function.
   * On modification of server name.
   */

  onServerNameChange(){
    this.serverCreated = false;
  }
}
