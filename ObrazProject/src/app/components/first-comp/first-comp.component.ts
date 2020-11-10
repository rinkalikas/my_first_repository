import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { LessonsService } from 'src/app/lessons.service';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.scss']
})
export class FirstCompComponent implements OnInit {

public lessons: any[]
  // Лучше не создавать переменные с сервисами, а создать метод в компоненте, который будет вызывать сервис
  // Например logIn() { this.authService.logIn() }
public autService;
public lessonService;

  constructor(private lessonsService: LessonsService, private authService: AuthService) {  }

  ngOnInit(): void {
    this.lessons = this.lessonsService.getLessons();
    this.autService = this.authService;
    this.lessonService = this.lessonsService;
  }

}
