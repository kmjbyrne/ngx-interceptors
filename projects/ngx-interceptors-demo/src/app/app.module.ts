import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { TokenInterceptor, NgxInterceptorsModule, NotificationInterceptor } from 'ngx-interceptors';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from '../environments/environment';
import { Router, RouterModule } from '@angular/router';
import { ConfigServiceTest } from './config.service';

const Config: any = {
    api: environment.api,
};

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NgxInterceptorsModule.forRoot(Config),
        RouterModule.forRoot([{ path: '', component: AppComponent }]),
        ToastrModule.forRoot(),
    ],
    providers: [
        AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            deps: [AuthService, ConfigServiceTest, Router],
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            deps: [ToastrService],
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
