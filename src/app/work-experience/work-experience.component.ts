import { Component } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  workExpList: WorkExperience[] = [
    {
      role: 'Software Engineer',
      company: 'adesso SE',
      duration: 'Jan 2023 - Now',
      description: [
        'Working at Customer Projects.',
        'Planning, Implamentation and Testing.',
      ],
    },
    {
      role: 'Junior Software Developer',
      company: 'ADITO Software GmbH',
      duration: 'Sep 2019 - Dec 2022',
      description: [
        'Working at Customer Projects.',
        'Working as CRM Developer.',
      ],
    },

  ];
}
