import { Component, OnInit } from "@angular/core";
import { ClientService } from "src/app/services/client.service";
import { Observable } from 'rxjs';


@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit {
  
  clients: any = [];

  constructor(public clienteService: ClientService) {}
  ngOnInit(): void {
     this.clients = this.clienteService.getAll().subscribe(
      clients => { 
        this.clients = clients
        console.log(this.clients)
      }
     )
  }
}
