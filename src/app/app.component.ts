import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';
import { COURSES } from './data/course-data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'practice-Component';
  Csci160: Course = COURSES[0];
  Csci161: Course = COURSES[1];
  Csci213: Course = COURSES[2];
}
