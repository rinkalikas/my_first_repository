import { Component, OnInit } from '@angular/core';
import { LessonsService } from 'src/app/lessons.service';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.scss']
})
export class FirstCompComponent implements OnInit {

public lessons: any[]

  constructor(private lessonsService: LessonsService) {  }

  ngOnInit(): void {
    this.lessons = this.lessonsService.getLessons();
  }

}
