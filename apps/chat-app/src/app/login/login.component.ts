import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'chat-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  readonly httpOptions = {
    withCredentials: true
  };

  constructor(private authService: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3333/api/login', this.httpOptions).subscribe();
  }

  login() {
    this.authService.login(this.username);
  }

}
