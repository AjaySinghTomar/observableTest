import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { of } from 'rxjs';
import { UtilityService } from 'src/app/appServices/utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {


  constructor(private _utility: UtilityService) { }

  obsMsg;
  promiseRes;

  ngOnInit() {
    const abc1 = of('ajay', 'singh', 'tomar');
    abc1.subscribe(res => {
      // console.log(res);
      this._utility.elAppend(res, 'ofOperator1')
    })

    const abc2 = of({ a: 'ajay', b: 'singh', c: 'tomar' });
    abc2.subscribe(res => {
      this.obsMsg = res;
      // console.log(res);
    })

    const abc3 = from(['ajay', 'singh', 'tomar']);
    abc3.subscribe(res => {
      // console.log(res);
      this._utility.elAppend(res, 'ofOperator3');
    })

    //promise convert to observable
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('promise resolve');
      },3000)
    })

    from(promise).subscribe(res => {
      console.log(res);
      this.promiseRes = res;
    })
  }

}
