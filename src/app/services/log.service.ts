import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  log() {
    console.log('exemplo com ngOnInit');
  }
}
