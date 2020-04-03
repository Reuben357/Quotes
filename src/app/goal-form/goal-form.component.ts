import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from './../quote';


@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  qoute_image: File = null;

  /*fileUpload(event){
    this.qoute_image = event.target.files[0];

  }*/

  newQuote =new Quote(0, "","", null, new Date(),0,0);
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quote( 0,'','',null, new Date(),0,0);
      }

  constructor() { }

  ngOnInit(): void {
  }

}
