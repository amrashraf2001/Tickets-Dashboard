import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  cards = [
    { title: 'إجمالي التذاكر', value: '30875', bgClass: 'bg-orange', icon: 'fas fa-ticket-alt' },
    {
      title: 'إجمالي مبيعات التذاكر',
      value: 'AED 96223',
      bgClass: 'bg-orange',
      icon: 'fas fa-chart-line',
      sales: true,
    },
    { title: 'إجمالي تذاكر اليوم', value: '29355', bgClass: 'bg-blue', icon: 'fas fa-calendar-alt' },
    { title: 'إجمالي مبيعات اليوم', value: 'AED 25370', bgClass: 'bg-blue', icon: 'fas fa-chart-line', sales: true },
    { title: 'إجمالي تذاكر الأكشاك', value: '93620', bgClass: 'bg-yellow', icon: 'fas fa-store' },
    {
      title: 'إجمالي مبيعات أكشاك التذاكر',
      value: 'AED 55248',
      bgClass: 'bg-yellow',
      icon: 'fas fa-chart-line',
      sales: true,
    },
    { title: 'إجمالي تذاكر الأونلاين', value: '7506', bgClass: 'bg-brown', icon: 'fas fa-mobile-alt' },
    {
      title: 'إجمالي مبيعات الأونلاين',
      value: 'AED 5717',
      bgClass: 'bg-brown',
      icon: 'fas fa-chart-line',
      sales: true,
    },
  ];

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
  }
}
