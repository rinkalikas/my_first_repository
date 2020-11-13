import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.scss']
})
export class AddLessonComponent implements OnInit {

  addLessonForm = new FormGroup({
    lessonTitle: new FormControl(''),
    lessonDescription: new FormControl(''),
    lessonTime: new FormControl(''),
  });
  
  onSubmit() {
    console.warn(this.addLessonForm.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
