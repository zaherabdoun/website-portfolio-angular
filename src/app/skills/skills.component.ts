import { Component } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'Angular',
      level: 'Expert',
      rating: 75,
    },
    {
      name: 'C#',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'TypeScript',
      level: 'Intermediate',
      rating: 75,
    },
    {
      name: 'JAVA',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'E2E Testing',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'Spring Boot',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'Git, GitLab, BitBucket',
      level: 'Intermediate',
      rating: 75,
    },
    {
      name: 'Database using MSSQL, MariaDB',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'DevOps (Docker & K8S)',
      level: 'Intermediate',
      rating: 70,
    },
  ];

}
