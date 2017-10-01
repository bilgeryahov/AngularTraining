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
  serverCapacity = '';

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
  }

  /**
   * The template will call this function.
   * On modification of server name.
   */

  onServerNameChange(){
    this.serverCreated = false;
  }

  /**
   * The template will call this function.
   * On clicking the clear server capacity button.
   */

  onClearServerCapacity(){
    this.serverCapacity = ''
  }
}
