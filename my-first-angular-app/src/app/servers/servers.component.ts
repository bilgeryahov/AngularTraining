import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server has been created!';
  serverName = 'TestServer';

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
    this.serverCreationStatus = 'Server has been created!';
    this.serverCreationStatus += ' Server name is ' + this.serverName;
  }
}
