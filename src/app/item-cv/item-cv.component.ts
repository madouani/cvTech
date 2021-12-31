import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { Personne } from '../Model/Personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {

  @Input() personne : Personne;
  @Output() selectedPersonne= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  selectPersonne(){
    //emmetre un evenement et y injecter la personne
    this.selectedPersonne.emit(this.personne);
  }

}
