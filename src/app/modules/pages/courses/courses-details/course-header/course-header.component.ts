import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-header',
  templateUrl: './course-header.component.html',
  styleUrls: ['./course-header.component.scss']
})
export class CourseHeaderComponent {
  @Input() course:any;

  enrollCourse(){
    window.open(this.course.url, '_blank');

  }
}
