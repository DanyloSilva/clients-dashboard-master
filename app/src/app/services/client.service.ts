import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable()
export class ClientService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.apiUrl + `/clients` , {});
  }

  getById() {}

  getByName() {}

  getGeneralTotals() {}

  getTotalsByCompany() {}
}
