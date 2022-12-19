import { Component } from '@angular/core';
import {AsyncPipe, CommonModule} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    AsyncPipe,
  ],
  selector: 'openapi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  data$ = this.http.get("/api/example");

  constructor(private readonly http: HttpClient) {
  }
}
