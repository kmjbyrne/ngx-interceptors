import { TestBed } from '@angular/core/testing';

import { NotificationInterceptorService } from './notification-interceptor.service';

describe('NotificationInterceptorService', () => {
  let service: NotificationInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
