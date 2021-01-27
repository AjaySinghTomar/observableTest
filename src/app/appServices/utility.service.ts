import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  elAppend(value, id) {
    let el = document.createElement('li');
    el.innerText = value;
    document.getElementById(id).appendChild(el);
  }
}
