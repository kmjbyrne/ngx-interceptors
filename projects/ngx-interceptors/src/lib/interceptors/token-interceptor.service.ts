import { Injectable, Inject } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
    HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(@Inject('AuthService') private auth, @Inject('ConfigService') private config, private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = this.auth.getToken() || '';

        if (token === null) {
            this.router.navigate(['/']);
            return throwError({ code: 403 });
        }

        let url = this.config.api + request.url;
        if (request.url.includes('http')) {
            url = request.url;
        }

        let providedContentType = false;
        let contentType = ';';
        if (request.headers.get('Content-Type')) {
            providedContentType = true;
            contentType = request.headers.get('Content-Type');
        }

        request = request.clone({
            url,
            setHeaders: {
                API_AUTHORIZATION: token,
            },
        });

        if (providedContentType) {
            request = request.clone({
                url,
                setHeaders: {
                    'Content-Type': contentType,
                },
            });
        }

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    return event;
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                this.router.navigate([this.config.redirect]);
                return throwError(error);
            })
        );
    }
}
