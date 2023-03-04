import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-curriculum',
  templateUrl: './course-curriculum.component.html',
  styleUrls: ['./course-curriculum.component.scss']
})
export class CourseCurriculumComponent {
  @Input() curriculumData:any;
  @Input() courseContentData:any;
  activeUnit = -1;

  onUnitClick(index:number){
    if(this.activeUnit == index){
      this.activeUnit = -1;
    }else{
      this.activeUnit = index;
    }
  }
}
