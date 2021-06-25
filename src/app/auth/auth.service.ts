import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {EnvironmentService} from "../../environments/environment.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private environmentService: EnvironmentService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
  }

  login(username: string, password: string): void {
    const body = new FormData();

    body.append('username', username);
    body.append('password', password);
    body.append('grant_type', 'password');

    this.http.post(this.environmentService.loginUrl(), body, this.environmentService.loginHeaderOptions())
      .subscribe(
        success => {
          let json = JSON.stringify(success);
          console.log(json);
          localStorage.setItem("auth", json);
          this.router.navigateByUrl('/dashboard').then(r => {
            if (r) {
              console.log('success');
            } else {
              console.log('failed');
            }
          });
        },
        error => {
          this.showErrorMessage(error);
        });
  }

  showErrorMessage(reject: any) : void {
    console.log(JSON.stringify(reject));

    let msg = 'An error occurred. Please contact support if it persists';

    if (reject.error.error_description) {
      msg = reject.error.error_description;
    } else {
      if (reject.status == 0) {
        msg = 'Unable to connect with server';
      } else if (reject.statusText) {
        msg = reject.statusText;
      }
    }
    this.snackBar.open(msg, 'Dismiss', {
      duration: 3000
    });
  }
}
