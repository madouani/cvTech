import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Personne } from '../Model/Personne';
import { PremierService } from '../premier.service';
import { CvService } from '../Service/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Personne[];
  selectedPersonne : Personne;
  constructor(private premierService:PremierService, private cvService:CvService) {
    this.personnes=this.cvService.getPersonne();
  }

  ngOnInit(): void {
    this.personnes ;
    this.premierService.logger(this.personnes);
  }

  selectPersonne(personne){
    this.selectedPersonne=personne;
  }


}
