import { Component, OnInit } from '@angular/core';
import { ProjectDetailsService } from 'src/app/services/project-details.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private service:ProjectDetailsService) { }
  projectData:any;

  ngOnInit(): void {
    this.projectData = this.service.projectDetails;
  }

}
