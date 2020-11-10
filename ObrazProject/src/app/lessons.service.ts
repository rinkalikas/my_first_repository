import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  // Лучше именовать более подробно, а то непонятно без контекста, что это за id
  // Например currentLessonId
  private lessonId;

  get getLessonId() {
    return this.lessonId
  }

  // Лучше сделать передачу параметра через url, всё-таки задание было именно про routing
  setLessonId(lessonIdValue) {
    this.lessonId = lessonIdValue
  }

  constructor() { }
  getLessons() {
    return [
      {id: 0,
      title: 'Сидение на кортах',
      description: 'Эксперты нашего онлайн-университета научат вас профессионально сидеть на кортах всего за 4 занятия.',
      time: '1 месяц'},
      {id: 1,
      title: 'Щёлканье семок',
      description: 'Научим не только технологии, но и этикету этого популярного занятия настоящих пацанов.',
      time: '2 месяца'},
      {id: 2,
      title: 'Основы отжимания мобил',
      description: 'Курс дает базовые знания в искусстве по отжиманию мобильных телефонов. Продолжить обучение по данной специальности можно на очных занятиях курса “Отжимание мобилок - от новичка к профессионалу”.',
      time: '6 месяцев'}
    ]
  }
}
