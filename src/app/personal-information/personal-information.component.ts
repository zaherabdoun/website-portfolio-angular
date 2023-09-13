import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent {

  myData: string[][] = [
    ['Name', 'Zaher Abdoun'],
    ['DOB', '20.07.1990'],
    ['Work Exp', '7 Years'],
    ['Education', 'Trainee at DRX'],
    ['Interests', 'Programming and Sport'],
  ]

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 7 years of experience in software development.',
    'Worked as Software Engineer for several Topics Frontend and Backend',
    'Delivered all product withing deadlines. Always eager to learn new technologies.',
    'Currently, working as Frontend Developer',
  ];
}
