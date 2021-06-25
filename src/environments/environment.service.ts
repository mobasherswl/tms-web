import {HttpHeaders} from "@angular/common/http";
import {environment} from "./environment";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  loginUrl(): string {
    return environment.baseUrl + environment.loginPath;
  }

  loginHeaderOptions() : any {
    return {
      headers: new HttpHeaders({
        // 'Content-Type':'application/json',
        'Authorization': `Basic ${environment.clientCredentials}`
      })
    };
  }
}
