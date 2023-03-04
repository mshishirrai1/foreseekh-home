import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-instructor',
  templateUrl: './course-instructor.component.html',
  styleUrls: ['./course-instructor.component.scss']
})
export class CourseInstructorComponent {
  @Input() instructorData:any;

}
