import { Component } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute: "DRÄXLMAIER Group GmbH",
      course: 'Software developer',
      duration: '2016-2019',
      score: '100%',
    },
    // {
    //   institute: 'Stanford University',
    //   course: 'M.S in Material Science',
    //   duration: '1993-1995',
    //   score: '75%',
    // },
  ]
}
