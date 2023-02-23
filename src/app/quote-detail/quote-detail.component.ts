import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import {Quote} from '../quote';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input()quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();



  clickCounter = 0;
clickCounter1 = 0;

countLikeclick() {
  this.quote.clickCounter += 1;
}

countDislikeclick() {
  this.quote.clickCounter1 += 1;
}
  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
