import { TestBed } from '@angular/core/testing';

import { LoginGuard } from './login.guard';

fdescribe('LoginGuard', () => {
  let guard: LoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it('should call canActivate', () => {
    sessionStorage.setItem('currentUserToken', '{}');
    const guardTest = guard.canActivate(null!, null!);
    expect(guardTest).toBeTrue();
    expect(guard.canActivate).toBeDefined();
  });
  it('should call canActivate else', () => {
    sessionStorage.removeItem('currentUserToken');
    const guardTest = guard.canActivate(null!, null!);
    expect(guardTest).toBeFalse();
    expect(guard.canActivate).toBeDefined();
  });
});
