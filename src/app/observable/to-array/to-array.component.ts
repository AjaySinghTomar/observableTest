import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { from } from 'rxjs';
import { interval, Subscription } from 'rxjs';
import { toArray,take } from 'rxjs/operators';
@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  users = [
    {name: 'ajay', skill: 'angular'},
    {name: 'hinu', skill: 'node'},
    {name: 'jay', skill: 'ms'},
  ]  

  constructor() { }

  ngOnInit() {

    // interval to array
    const sub1 = interval(1000);
    sub1.pipe(
      take(5),
      toArray()
    )
    .subscribe(res => {
      // console.log(res);
    })



    const sub2 = from(this.users);
    sub2.pipe(toArray())
    .subscribe(res => {
      // console.log(res);
    })

    const sub3 = of('ajay', 'singh', 'tomar');
    console.log(sub3);
    sub3.pipe(toArray()).subscribe(res => {
      console.log(res);
    })

  }

}
