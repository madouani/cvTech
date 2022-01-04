import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[];
  personId: number;
  constructor( ) {
    this.personnes= [
      new Personne(1,  'ADOUANI', 'Mahmoud', 'Image_Mah_CV2.jpg', 'Diplôme national Ingénieur en Informatique','FullStack Developper','Certifications : ITIL® | OCA® Java 8 Certified | Scrum SFPC® | RHCSA® \
      Développeur Java/Spring/Angular \
      Java 8, Spring Boot,Spring MVC, Spring Data, JPA, Hibernate \
      Web service API REST, Docker, Jenkins \
      Angular, Type Script, Bootstrap, CSS \
      Base de données : Oracle, PostgreSQL, MySQL, SQL Server, SQL, PLSQL \
      Eclipse, Spring Tool Suite, VSCODE, Swagger, Postman, Maven, GIT, JIRA'),
      new Personne(2, 'Torchkana', 'Anga','rotating_card_profile.png', 'Commerce electronique','Marketing digital','Résumer Marketing' ),
      new Personne(3, 'Anis', 'Anis','tim_logo.png', 'Technicien Supérieur','FE Developper','HTML, CSS, Bootstrap, Wordpress, PHP' )

    ];
  }

  getPersonne(): Personne[]{
    return this.personnes;
  }

  getPersonneById(id: number): Personne{
    const personne = this.personnes.find(personne => {
      return personne.id == id;
    });
    return personne;
  }

  addPersonne(personne: Personne): void{
    personne.id=this.personnes[this.personnes.length-1].id+1;
    this.personnes.push(personne);
  }

}
