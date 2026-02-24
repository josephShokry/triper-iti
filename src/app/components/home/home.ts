import { ChangeDetectorRef, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Btn } from '../btn/btn';
import { TripGrid } from '../trip-grid/trip-grid';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, Btn, TripGrid],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  public totalCost:number = 0;

  addToCoast(value:number){
    this.totalCost += value;
  }
}
