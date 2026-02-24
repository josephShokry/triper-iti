import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  imports: [NgStyle],
  templateUrl: './btn.html',
  styleUrl: './btn.css',
})
export class Btn {
  @Input() title:string = "click me";
  @Input() color:string = "red";
  @Output() action = new EventEmitter<void>();

  onClick(){
    this.action.emit();
  }
}
