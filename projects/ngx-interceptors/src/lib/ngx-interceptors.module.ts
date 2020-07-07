import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    providers: [],
})
export class NgxInterceptorsModule {
    static forRoot(config: any): ModuleWithProviders<NgxInterceptorsModule> {
        return {
            ngModule: NgxInterceptorsModule,
            providers: [
                {
                    provide: 'config',
                    useValue: config,
                },
            ],
        };
    }
}
