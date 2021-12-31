import { Component, OnInit } from '@angular/core';
import { Personne } from '../Model/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Personne[];
  selectedPersonne : Personne;
  constructor() { }

  ngOnInit(): void {
    this.personnes = [
      new Personne(1,  'ADOUANI', 'Mahmoud', 'Image_Mah_CV2.jpg', 'Diplôme national Ingénieur en Informatique','FullStack Developper','Certifications : ITIL® | OCA® Java 8 Certified | Scrum SFPC® | RHCSA® \
      Développeur Java/Spring/Angular \
      Java 8, Spring Boot,Spring MVC, Spring Data, JPA, Hibernate \
      Web service API REST, Docker, Jenkins \
      Angular, Type Script, Bootstrap, CSS \
      Base de données : Oracle, PostgreSQL, MySQL, SQL Server, SQL, PLSQL \
      Eclipse, Spring Tool Suite, VSCODE, Swagger, Postman, Maven, GIT, JIRA'),
      new Personne(2, 'Torchkana', 'Anga','rotating_card_profile.png', 'Commerce electronique','Marketing digital','Résumer Marketing' )
    ]
  }

  selectPersonne(personne){
    this.selectedPersonne=personne;
  }


}
