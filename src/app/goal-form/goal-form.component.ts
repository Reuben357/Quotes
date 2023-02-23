import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  constructor() { }

  // tslint:disable-next-line:variable-name
  qoute_image: File = null;

  newQuote = new Quote(0, '', '', null, new Date(), 0, 0);
  @Output() addQuote = new EventEmitter<Quote>();

  fileUpload(event) {
    this.qoute_image = event.target.files[0];

  }

  submitQuote() {
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quote( 0, '', '', null, new Date(), 0, 0);
      }

  ngOnInit(): void {
  }

}
