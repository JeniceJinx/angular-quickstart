import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactFormComponent } from './pages/contacts/contacts.component';
import { IndprojComponent } from './pages/indproj/indproj.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'projects/:id', component:IndprojComponent},
  {path:'about', component:AboutComponent},
  {path:'contacts', component:ContactFormComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
