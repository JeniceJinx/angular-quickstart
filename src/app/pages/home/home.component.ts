import { Component, OnInit } from '@angular/core';
import { ProjectDetailsService } from 'src/app/services/project-details.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:ProjectDetailsService) { }
  projectData:any;


  ngOnInit(): void {
    this.projectData = this.service.projectDetails;
  }

}
