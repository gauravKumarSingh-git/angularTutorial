import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',    //app-servers as an attribute
  // selector: '.app-servers',    //class selector
  // template: `
    // <app-server> </app-server>
    // <app-server> </app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';
  serverName = 'TestServer';
  username = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }

  onResetUsername(){
    this.username = ''
  }
  
  checkAllowReset(){
    if(this.username.length > 0) return true;
    return false;
  }
}
