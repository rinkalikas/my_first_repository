import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let aaa;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  //Неправильный тест
  //Как получить права на изменение private переменной или как мокнуть её?

  // Никак, мокать нужно только сторонние зависимости, а это внутреннее состояние, его нужно проверять
  // Если вы хотите писать теста на эти методы, то вам ничего не нужно мокать
  // it('should aaa crate', () => {
  //   service.logIn = jasmine.createSpy().and.returnValue(false);
  //   aaa = service.getIsUserAuth;
  //   expect(aaa).toBeTruthy();
  // });
});
