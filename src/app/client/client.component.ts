import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent {
  //  clients: object;
  //  active_client :object;
  constructor(private route: ActivatedRoute) {
  
    
  //  let id = this.route.snapshot.paramMap.get("id");
    // this.clients = {
    //   1: { client_name: 'Mahroof' },
    //   2: { client_name: 'suhana' },
    //   3: { client_name: 'vapachi' },
    //   4: { client_name: 'ummachi' },
    // };
     
  }

}
