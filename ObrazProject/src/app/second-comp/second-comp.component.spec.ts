import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LessonsService } from '../lessons.service';

import { SecondCompComponent } from './second-comp.component';

describe('SecondCompComponent', () => {
  let component: SecondCompComponent;
  let fixture: ComponentFixture<SecondCompComponent>;
  // let lessonsService = jasmine.createSpyObj('LessonsService', )
  let service: LessonsService 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
     TestBed.configureTestingModule({
       providers:[{
         provide: LessonsService, useValue: service
       }]
     })
    service = TestBed.inject(LessonsService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
