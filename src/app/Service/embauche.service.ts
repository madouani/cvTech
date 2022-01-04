import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private personnes: Personne[];
  constructor() {
    this.personnes=[];
  }

  getEmbaucher(): Personne[]{
    return this.personnes;
  }

  embaucher(personne:Personne):void{
    const index = this.personnes.indexOf(personne);
    if(index < 0){
    this.personnes.push(personne);
    }else{
      alert(`${personne.names} est déjà selectionnée`);
    }
  }

  debaucher(personne): void{
    const index = this.personnes.indexOf(personne);
    if(index >= 0){
      this.personnes.splice(index,  1);
    }
  }

}
