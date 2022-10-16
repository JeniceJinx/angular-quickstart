import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {

  constructor() { }

  //project details

  projectDetails = [
    {
      id: 1,
      projectTitle: "Java Code ",
      projectTech: "Java ",
      basicConcept: "basic java application ",
      projectImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGphdmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      projectUrl:   "https://github.com/JeniceJinx/PerScholasProjects/tree/main/IdeaProjects/Gladiator"
      },
      {
      id: 2,
      projectTitle: "Javascript Code ",
      projectTech: "JavaScript ",
      basicConcept: "loops, if statements ",
      projectImage: "https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGphdmFzY3JpcHR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      projectUrl:   ""
      },
      {
      id: 3,
      projectTitle: "SQL DB ",
      projectTech: "SQL",
      basicConcept: "basic  SQL ",
      projectImage: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3FsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      projectUrl:   "https://github.com/JeniceJinx/NFL-Queries/blob/main/Sql"
      },
      {
      id: 4,  
      projectTitle: "Python Code ",
      projectTech: "python ",
      basicConcept: "basic python application ",
      projectImage: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHl0aG9uJTIwcHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      projectUrl:   "https://github.com/JeniceJinx/PythonPractice/blob/main/Fortune%20Cookie.py"
      },
      {
      id: 5,
      projectTitle: "Basic Web Page ",
      projectTech: "HTML CSS Javascript ",
      basicConcept: "basic web application ",
      projectImage: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGphdmFzY3JpcHR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      projectUrl:   ""
      },
      {
      id: 6,
      projectTitle: "Capstone",
      projectTech: "Angular ",
      basicConcept: "basic Angular application ",
      projectImage: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGphdmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      projectUrl:   ""
      },
      
  ]
}
