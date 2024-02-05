import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent  {

@Input() val:number=0
@Output() event:EventEmitter<string>= new EventEmitter<string>() 
input(value:string){
  // console.log(value);
  this.event.emit(value)
}

}
