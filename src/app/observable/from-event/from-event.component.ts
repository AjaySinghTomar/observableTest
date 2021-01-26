import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  @ViewChild('addButton') addBtn: ElementRef;

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      let data = `vedio ${count++}`;
      this.elAppend(data, 'elContainer');
    })
  }

  elAppend(value, id) {
    let el = document.createElement('li');
    el.innerText = value;
    document.getElementById(id).appendChild(el);
  }

}
