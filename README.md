# Angular Interceptors

## Installation

```bash
npm install -D ngx-interceptors
```

## Setup

Simply import the interceptors as normal, ensuring that you have an existing AuthService which will fetch API tokens from local storage.

Add the following to the app.module providers. ConfigService is simply a class that holds the values of the environment. It can be
a class or an object. As long as config.api is present as the TokenInterceptor will use the API env variable to prefix requests.

```typescript
providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        deps: [AuthService, ConfigService, Router],
        multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: NotificationInterceptor,
        deps: [ToastrService],
        multi: true,
    },
];
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
