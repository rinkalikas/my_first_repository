import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadLessons, loadLessonsSuccess } from '../lessons.actions';
import { selectLessons } from '../lessons.selector';

@Component({
  selector: 'app-ngrx-lessons',
  templateUrl: './ngrx-lessons.component.html',
  styleUrls: ['./ngrx-lessons.component.scss']
})
export class NgrxLessonsComponent implements OnInit {
  selectLessons$ = this.store.select(selectLessons);
  areLessonsLoaded$ = this.store.select(this.areLessonsLoaded);
  constructor() {
  }

  ngOnInit(): void {
    // this.store.dispatch(loadLessons())
  }

}
