import { Injectable } from "@angular/core";
import { loadLessons, loadLessonsSuccess } from './lessons.actions';
import { EMPTY, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LessonsService } from "src/app/lessons.service";
import { title } from 'process';

@Injectable()
export class LessonEffects {
    loadLessons$ = createEffect(() => 
    this.actions$.pipe(
        ofType(loadLessons),
        mergeMap(() => this.lessonsService.getLessonAsObs()
            .pipe(
                map(lessons => {
                    return loadLessonsSuccess({lessons: lessons})
                }),
                catchError(() => EMPTY)
            )
        )
    ));

    constructor(
        private actions$: Actions,
        private lessonsService: LessonsService
    )
}