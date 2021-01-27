import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { interval, Subscription } from 'rxjs';
import { UtilityService } from 'src/app/appServices/utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  intervalMessage;
  timerMessage;
  unsubscribeInterval: Subscription;
  unsubscribeTimer: Subscription;
  constructor(private _utility: UtilityService) { }

  ngOnInit() {

    const broadcastInterval = interval(1000);
    const broadcastTimer = timer(5000, 1000);

    this.unsubscribeInterval = broadcastInterval.subscribe(res => {
      console.log(res);
      this.intervalMessage = `vedio ${res}`;
      this._utility.elAppend(this.intervalMessage, 'idInterval')
      if(res >= 5){
        this.unsubscribeInterval.unsubscribe();
      }
    })

    this.unsubscribeTimer = broadcastTimer.subscribe(res => {
      this.timerMessage = `vedio ${res}`;
      this._utility.elAppend(this.timerMessage, 'idInterval1');
      if(res >= 5) {
        this.unsubscribeTimer.unsubscribe();
      }
    })
  }

}
