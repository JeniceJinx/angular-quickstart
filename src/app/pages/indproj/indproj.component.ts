import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectDetailsService } from 'src/app/services/project-details.service';



@Component({
  selector: 'app-indproj',
  templateUrl: './indproj.component.html',
  styleUrls: ['./indproj.component.css']
})
export class IndprojComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:ProjectDetailsService) { }
  getProjectID:any;
  projectData:any;
  
  ngOnInit(): void {
    this.getProjectID = this.param.snapshot.paramMap.get('id');
    console.log(this.getProjectID,'getproject');
    if(this.getProjectID)
    {
     this.projectData = this.service.projectDetails.filter((value)=>{
      return value.id == this.getProjectID;
      });

      console.log(this.projectData, 'projectData>>');
    }
  }

}
