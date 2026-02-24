import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TripModel } from '../../models/trip/trip-model';
import { Btn } from '../btn/btn';
import { ImgHover } from '../../directives/img-hover';
import { DetailsPipePipe } from '../../pipes/details-pipe-pipe';

@Component({
  selector: 'app-trip',
  imports: [Btn, ImgHover, DetailsPipePipe],
  templateUrl: './trip.html',
  styleUrl: './trip.css',
})
export class Trip {
  @Input() trip:TripModel = {
        id:1,
        title: "visiting pyramids",
        imgUrl: "https://www.osiristours.com/wp-content/uploads/2024/10/egypt-sphinx-pyramid-osiris-tours-luxury-custom-tour.jpg",
        cost: 500,
        details:[
          "visit the pyrmaids",
          "visit the sphynix"
        ]
      };

  isExpanded:boolean = false;
  
  @Output() buyEvent = new EventEmitter<number>();
  
  buy(){
    console.log("trip is called")
    this.buyEvent.emit(this.trip.cost);
  }

  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }
}
