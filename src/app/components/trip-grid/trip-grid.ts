import { Component, EventEmitter, Output } from '@angular/core';
import { Trip } from '../trip/trip';
import { TripModel } from '../../models/trip/trip-model';
import { Hover } from '../../directives/hover';

@Component({
  selector: 'app-trip-grid',
  imports: [Trip, Hover],
  templateUrl: './trip-grid.html',
  styleUrl: './trip-grid.css',
})
export class TripGrid {
  public trips: TripModel[];
  constructor() {
    this.trips = [
      {
        id:1,
        title: "visiting pyramids",
        imgUrl: "https://www.osiristours.com/wp-content/uploads/2024/10/egypt-sphinx-pyramid-osiris-tours-luxury-custom-tour.jpg",
        cost: 200,
        details:[
          "visit the pyrmaids",
          "visit the sphynix"
        ]
      },
      {
        id:2,
        title: "visiting Luxor",
        imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/64/23/fd/caption.jpg?w=500&h=400&s=1",
        cost: 300,
        details:[
          "visit the pyrmaids",
          "visit the sphynix"
        ]
      },
      {
        id:3,
        title: "visiting Cairo",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0xYwD5sgkqsEHHPgCXPvhtpgNvTYViN2EIA&s",
        cost: 400,
        details:[
          "visit the pyrmaids",
          "visit the sphynix"
        ]
      },
      {
        id:4,
        title: "visiting pyramids",
        imgUrl: "https://www.osiristours.com/wp-content/uploads/2024/10/egypt-sphinx-pyramid-osiris-tours-luxury-custom-tour.jpg",
        cost: 500,
        details:[
          "visit the pyrmaids",
          "visit the sphynix"
        ]
      },
      {
        id:5,
        title: "visiting Luxor",
        imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/64/23/fd/caption.jpg?w=500&h=400&s=1",
        cost: 600,
        details:[
          "visit the pyrmaids",
          "visit the sphynix"
        ]
      },
      {
        id:6,
        title: "visiting Cairo",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0xYwD5sgkqsEHHPgCXPvhtpgNvTYViN2EIA&s",
        cost: 700,
        details:[
          "visit the pyrmaids",
          "visit the sphynix"
        ]
      },
    ];
  }

  @Output() buyEvent = new EventEmitter<number>();

  buy(cost:number){
    console.log("called")
    this.buyEvent.emit(cost);
  }
}
