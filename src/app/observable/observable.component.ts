import { Component, OnInit } from '@angular/core';
import { min, Observable } from 'rxjs';


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  monObservable: Observable<any>;
  mesImages = [
    'lateral1.jpg','lateral2.jpg'
  ];
  currentImage: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.mesImages[0]);
    console.log(this.mesImages[1]);
   this.monObservable= new Observable(observer => {
      let i=this.mesImages.length-1;
      setInterval(() => {
        observer.next(this.mesImages[i]);
        if(i>0){
          i--;
       }else {
         i=this.mesImages.length-1;
     }
      }, 2000);



    });

    this.monObservable.subscribe( val => {
      console.log(val);
      this.currentImage= val; // first subscription
    });

    this.monObservable.subscribe( val2 => {
      console.log('Second subscription'); // second subscription
      this.currentImage= val2;
    });

  }
}



