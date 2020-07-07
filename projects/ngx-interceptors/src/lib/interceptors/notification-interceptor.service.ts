import { Injectable, Inject } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class NotificationInterceptor {
    constructor(@Inject('ToastrService') private notification) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    return event;
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                this.notification.warning('test');
                return throwError(error);
            })
        );
    }
}
