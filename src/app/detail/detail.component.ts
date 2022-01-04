import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../Model/Personne';
import { CvService } from '../Service/cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  personne: Personne;
  id: number;
  private sub: any;

  constructor(
    private cvService:CvService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(
     params => {
      this.personne = this.cvService.getPersonneById(+params['id']);
    }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
