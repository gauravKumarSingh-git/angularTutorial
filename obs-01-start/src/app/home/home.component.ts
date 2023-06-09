import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // })

    const customIntervalObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        // observer.next(count+1);
        // if (count === 2) {
        //   observer.complete();
        // }
        // if (count > 3) {
        //   observer.error(new Error('Count is greater than 3!'));
        // }
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable
    .pipe(filter((data: number) => {return data > 1}),  map( (data) => { return 'Round : ' + data; }))
    .subscribe(
      (count) => {
        console.log(count);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        console.log('completed');
      }
    );
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
