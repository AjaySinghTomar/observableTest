import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { UtilityService } from 'src/app/appServices/utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  @ViewChild('addButton') addBtn: ElementRef;

  constructor(private _utility: UtilityService) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      let data = `vedio ${count++}`;
      this._utility.elAppend(data, 'elContainer');
    })
  }

  

}
