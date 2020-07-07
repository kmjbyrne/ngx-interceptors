import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'ngx-interceptors-demo';

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get('google.ie').subscribe((resp) => {});
    }
}
