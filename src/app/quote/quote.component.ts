import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';
import { DateCountPipe } from '../date-count.pipe';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input()quote:Quote;

  quotes: Quote[] = [
    new Quote(1, 'Albert Einstein', 'If you canot explain it simply you donot understand it well enough', null, new Date(2020, 1, 3),0,0),
    new Quote(2, 'Mahatma Gandhi', 'In a gentle way you can shake the world', null, new Date(2020, 2, 3),0,0),
    new Quote(3, 'Nelson Mandela', 'I never lose i either win or learn', null, new Date(2020, 3, 19),0,0),
  ];
  



  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = DateCountPipe
    this.quotes.push(quote)
  }

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}
